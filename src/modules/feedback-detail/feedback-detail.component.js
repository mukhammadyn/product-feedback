import hoc from "@utils/hoc"
import getCommentCount from "@utils/getCommentCount";
import { Button } from "@atoms/button";
import { FeedbackCard } from "@global-components/feedback-card/feedback-card.component";
import { CommentItemComponent } from "./comment-item/comment-item.component";
import { CommentForm } from "./components/comment-form/comment-form.component";
import { useFeedbackDetailProps } from "./feedback-detail.props";
import {
  CommentList,
  Comments,
  CommentsHeading,
  FeedbackDetailBackLink,
  FeedbackDetailHeader,
  FeedbackDetailItem,
  FeedbackDetailMain,
} from "./feedback-detail.style";

export const FeedbackDetail = hoc(
  useFeedbackDetailProps,
  ({
    id,
    badgeText,
    title,
    description,
    importanceCount,
    comments,
    isUpvoted,
    cardId,
    commentsLength,
    handleCommentOnclick,
    repliedUser,
    setRepliedUser,
  }) => {
    return (
      <FeedbackDetailMain>
        <FeedbackDetailHeader>
          <FeedbackDetailBackLink to="/">Go back</FeedbackDetailBackLink>
          <Button
            address={`/edit-feedback/${id}`}
            text="Edit Feedback"
            isButton={false}
            bgColor="#4661E6"
          ></Button>
        </FeedbackDetailHeader>
        <FeedbackDetailItem>
          <FeedbackCard
            badgeText={badgeText}
            title={title}
            description={description}
            importanceCount={importanceCount}
            commentCount={getCommentCount(comments)}
            isUpvoted={isUpvoted}
            id={cardId}
          />
        </FeedbackDetailItem>
        <Comments>
          <CommentsHeading>{commentsLength} Comments</CommentsHeading>
          <CommentList onClick={handleCommentOnclick}>
            {comments?.map((comment) => (
              <CommentItemComponent
                id={comment.id}
                key={comment.id}
                comment={comment}
              />
            ))}
          </CommentList>
        </Comments>
        <CommentForm
          dataUserName={repliedUser.username}
          repliedUser={repliedUser}
          id={id}
          setRepliedUser={setRepliedUser}
        />
      </FeedbackDetailMain>
    );
  }
);
