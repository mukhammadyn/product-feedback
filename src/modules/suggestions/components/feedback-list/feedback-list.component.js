import { Empty } from "../empty";
import { FeedbackCard } from "@global-components/feedback-card";
import { FeedbackListWrapper } from "./feedback-list.style";
import { useFeedbackListProps } from "./feedback-list.props";
import hoc from "@utils/hoc"

export const FeedbackList = hoc(useFeedbackListProps, ({ feedbacksList, commentCount }) => {
  return (
    <FeedbackListWrapper>
      {feedbacksList.length > 0 ? (
        feedbacksList.map(
          ({
            id,
            title,
            description,
            upvotes,
            isUpvoted,
            category,
            comments,
          }) => {
            return (
              <FeedbackCard
                isUpvoted={isUpvoted}
                id={id}
                key={id}
                title={title}
                description={description}
                commentCount={commentCount(comments)}
                importanceCount={upvotes}
                badgeText={category}
              />
            );
          }
        )
      ) : (
        <Empty />
      )}
    </FeedbackListWrapper>
  );
});
