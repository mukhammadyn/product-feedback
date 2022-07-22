import { Empty } from "../empty";
import { FeedbackCard } from "@global-components/feedback-card";
import { FeedbackListWrapper } from "./feedback-list.style";
import { useFeedbackListProps } from "./feedback-list.props";
import hoc from "@utils/hoc"

export const FeedbackList = hoc(useFeedbackListProps, ({ feedbacksList }) => {
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
            const commentCount =
              comments?.reduce(
                (prev, current) =>
                  current.replies
                    ? (prev += current.replies.length + 1)
                    : (prev += 1),
                0
              ) ?? 0;

            return (
              <FeedbackCard
                isUpvoted={isUpvoted}
                id={id}
                key={id}
                title={title}
                description={description}
                commentCount={commentCount}
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
