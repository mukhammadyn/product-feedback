import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Empty } from "../empty";
import { FeedbackCard } from "@global-components/feedback-card";
import { FeedbackListWrapper } from "./feedback-list.style";

export const FeedbackList = ({ feedbacks }) => {
  const category = useSelector((state) => state.categories.activeCategory);

  const [feedbacksList, setFeedbacksList] = useState(feedbacks || []);

  useEffect(() => {

    if(category === 'All') {
      setFeedbacksList(feedbacks)
    } else {
      setFeedbacksList(feedbacks.filter(feedback => {
        const nameRegex = new RegExp(category, 'gi')
        return feedback.category.match(nameRegex)
      }))
    }

  },[category, feedbacks, setFeedbacksList])

  return (
    <FeedbackListWrapper>
      {
      feedbacksList.length > 0 ? feedbacksList.map(
        ({ id, title, description, upvotes, isUpvoted, category, comments }) => {
          const commentCount = comments?.reduce((prev, current) => current.replies ? prev += current.replies.length + 1 : prev += 1, 0) ?? 0
          
          return <FeedbackCard
            isUpvoted={isUpvoted}
            id={id}
            key={id}
            title={title}
            description={description}
            commentCount={commentCount}
            importanceCount={upvotes}
            badgeText={category}
          />
        }
      ) : <Empty />}
    </FeedbackListWrapper>
  );
};
