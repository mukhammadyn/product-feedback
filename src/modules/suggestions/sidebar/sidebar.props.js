import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, setCategory } from "@store/category.slice";

export const useSidebarProps = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const statusFeedbacks = useSelector((state) =>
    state.feedbacks.feedbacks.filter(
      (feedback) => feedback.status !== "suggestion"
    )
  );
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryFilter = (e) => {
    const current = e.target.closest("button") || null;

    if (current && current.id >= 0) {
      setActive(false);
      dispatch(
        setCategory(categories.find((category) => category.id === current.id))
      );
    } else if (current && current.id < 0) {
      setActive(true);
      dispatch(setCategory({ category: "All", id: -1 }));
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

  return {
    categories,
    isActive,
    handleCategoryFilter,
    planned: planned.length,
    progress: progress.length,
    live: live.length,
  };
};
