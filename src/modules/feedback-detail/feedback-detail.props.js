import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFeedbacks } from "@store/feedback.slice";

export const useFeedbackDetailProps = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [repliedUser, setRepliedUser] = useState({});

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const current = feedbacks.find((fb) => `${fb.id}` === `${id}`);

  const {
    title,
    description,
    comments,
    upvotes: importanceCount,
    category: badgeText,
    isUpvoted,
    id: cardId,
  } = current || {};

  const commentsLength = comments?.reduce(
    (prev, current) =>
      current.replies ? (prev += current.replies?.length + 1) : (prev += 1),
    0
  );

  const handleCommentOnclick = (e) => {
    const event = e.target;
    const id = event.closest("[data-id]").dataset.id;

    if (event.dataset.user) {
      setRepliedUser({ username: event.dataset.user, id });
    }
  };

  return {
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
    setRepliedUser
  }
};
