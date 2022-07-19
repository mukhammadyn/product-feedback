import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFeedbacks } from "@store/feedback.slice";

import { Button } from "@atoms/button";
import {
  CommentList,
  Comments,
  CommentsHeading,
  FeedbackDetailBackLink,
  FeedbackDetailHeader,
  FeedbackDetailItem,
  FeedbackDetailMain,
} from "./feedback-detail.style";
import { FeedbackCard } from "../../components/global-components/feedback-card/feedback-card.component";
import { CommentItemComponent } from "./comment-item/comment-item.component";
import { CommentForm } from "./components/comment-form/comment-form.component";
import { useState } from "react";

export const FeedbackDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [repliedUser, setRepliedUser] = useState({})

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const current = feedbacks.find((fb) => +fb.id === +id);

  const {
    title,
    description,
    comments,
    upvotes: importanceCount,
    category: badgeText,
    isUpvoted,
    id: cardId,
  } = current || {};

  const commentsLength = comments?.reduce((prev, current) => current.replies ? prev += current.replies?.length + 1 : prev += 1, 0)

  const handleCommentOnclick = (e) => {
    const event = e.target
    const id = event.closest('[data-id]').dataset.id

    if(event.dataset.user) {
      setRepliedUser({username: event.dataset.user, id})
    }
  }

  return (
    <FeedbackDetailMain>
      <FeedbackDetailHeader>
        <FeedbackDetailBackLink to="/">Go back</FeedbackDetailBackLink>
        <Button text="Edit Feedback" bgColor="#4661E6"></Button>
      </FeedbackDetailHeader>
      <FeedbackDetailItem>
        <FeedbackCard
          badgeText={badgeText}
          title={title}
          description={description}
          importanceCount={importanceCount}
          commentCount={comments?.length}
          isUpvoted={isUpvoted}
          id={cardId}
        />
      </FeedbackDetailItem>
      <Comments>
        <CommentsHeading>{commentsLength} Comments</CommentsHeading>
        <CommentList onClick={handleCommentOnclick}>
          {
            comments?.map(comment => <CommentItemComponent id={comment.id} key={comment.id} comment={comment} />)
          }
        </CommentList>
      </Comments>
      <CommentForm dataUserName={repliedUser.username} repliedUser={repliedUser} id={id} setRepliedUser={setRepliedUser} />
    </FeedbackDetailMain>
  );
};
