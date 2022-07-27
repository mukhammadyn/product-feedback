import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "@store/feedback.slice";
import { useState } from "react";

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

  const [activeRoadMap, setActiveRoadMap] = useState("planned");

  const handleButtonClick = (e) => {
    if(e.target.matches('button[data-type]')) {
      setActiveRoadMap(e.target.dataset.type)
    }
  }

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
    activeRoadMap,
    setActiveRoadMap,
    handleButtonClick,
  };
};
