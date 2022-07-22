import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@store/category.slice";
import { addNewFeedback } from "@store/feedback.slice";
import { useNavigate } from "react-router-dom";


export const useFormFeedbackProps = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector(state => state.feedbacks.loading)

  const feedbackTitle = useRef();
  const feedbackCategory = useRef();
  const feedbackDetail = useRef();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addNewFeedback({
        title: feedbackTitle.current.value,
        category: feedbackCategory.current.textContent,
        description: feedbackDetail.current.value,
      })
    );

    e.target.reset()
    navigate('/')
  };

  return {
    categories,
    isLoading,
    feedbackTitle,
    feedbackCategory,
    feedbackDetail,
    handleFormSubmit
  }
}