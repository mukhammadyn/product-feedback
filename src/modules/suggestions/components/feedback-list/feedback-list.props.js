import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFeedbackListProps = ({ feedbacks }) => {
  const category = useSelector((state) => state.categories.activeCategory);

  const [feedbacksList, setFeedbacksList] = useState(feedbacks || []);

  useEffect(() => {
    if (category === "All") {
      setFeedbacksList(feedbacks);
    } else {
      setFeedbacksList(
        feedbacks.filter((feedback) => {
          const nameRegex = new RegExp(category, "gi");
          return feedback.category.match(nameRegex);
        })
      );
    }
  }, [category, feedbacks, setFeedbacksList]);

  return {
    feedbacksList,
  };
};
