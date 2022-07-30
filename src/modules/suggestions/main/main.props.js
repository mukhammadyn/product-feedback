import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "@store/feedback.slice";
import { getFeedbacksStatus } from "@store/feedback.slice";

export const useMainProps = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const feedbacksStatus = useSelector(getFeedbacksStatus);

  useEffect(() => {

    if(feedbacksStatus === 'idle') {
      dispatch(getFeedbacks());
    }

  }, [feedbacksStatus, dispatch]);

  return {
    feedbacks,
    feedbacksStatus,
  }
};
