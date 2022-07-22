import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "@store/feedback.slice";

export const useMainProps = () => {
  const dispatch = useDispatch();
  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
  const loading = useSelector((state) => state.feedbacks.loading);

  useEffect(() => {
    dispatch(getFeedbacks());

    return () => null;
  }, [dispatch]);

  return {
    feedbacks,
    loading
  }
};
