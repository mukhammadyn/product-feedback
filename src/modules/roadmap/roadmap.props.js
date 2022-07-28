import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "@store/feedback.slice";
import { useState } from "react";
import sortFeedbackStatus from "@utils/sortFeedbackStatus";

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

  const [activeRoadMap, setActiveRoadMap] = useState("planned");

  const handleButtonClick = (e) => {
    if(e.target.matches('button[data-type]')) {
      setActiveRoadMap(e.target.dataset.type)
    }
  }

  const { planned, progress, live } = sortFeedbackStatus(statusFeedbacks);

  sortByUpvote(planned);
  sortByUpvote(progress);
  sortByUpvote(live);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  return {
    planned,
    progress,
    live,
    activeRoadMap,
    setActiveRoadMap,
    handleButtonClick,
  };
};
