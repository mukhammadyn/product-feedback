import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "@store/feedback.slice";

export const useRoadMapProps = () => {
  const dispatch = useDispatch();

  const statusFeedbacks = useSelector((state) =>
    state.feedbacks.feedbacks.filter(
      (feedback) => feedback.status !== "suggestion"
    )
  );

  const sortByUpvote = (arr) => {
    if (arr?.length > 0) {
      arr.sort((a, b) => b.upvotes - a.upvotes);
    }
  };

  const planned = [];
  const progress = [];
  const live = [];

  const checkStatus = (status, checkStatus) => {
    return status.toLowerCase() === checkStatus;
  };

  statusFeedbacks.forEach((statusFeedback) => {
    if (checkStatus(statusFeedback.status, "planned"))
      planned.push(statusFeedback);
    else if (checkStatus(statusFeedback.status, "in-progress"))
      progress.push(statusFeedback);
    else if (checkStatus(statusFeedback.status, "live"))
      live.push(statusFeedback);
  });

  sortByUpvote(planned);
  sortByUpvote(progress);
  sortByUpvote(live);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  const commentCount = (comments) => {
    return (
      comments?.reduce(
        (prev, current) =>
          current.replies ? (prev += current.replies.length + 1) : (prev += 1),
        0
      ) ?? 0
    );
  };

  return {
    planned,
    commentCount,
    progress,
    live,
  };
};
