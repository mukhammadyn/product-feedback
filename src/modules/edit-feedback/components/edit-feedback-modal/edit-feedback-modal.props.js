import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getCategories } from "@store/category.slice";

import { useNavigate, useParams } from "react-router-dom";
import { editFeedbackThunk, deleteFeedbackThunk } from "@store/feedback.slice";
import { getFeedbacksStatus } from "@store/feedback.slice";

export const useEditFeedbackModalProps = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);

  const categories = useSelector((state) => state.categories.categories);
  const feedbacksStatus = useSelector(getFeedbacksStatus);

  const feedbackCategory = useRef();
  const feedbackTitle = useRef();
  const feedbackStatus = useRef();
  const feedbackDetail = useRef();

  const current = feedbacks.find((fb) => `${fb.id}` === `${id}`);

  const { title, description, category } = current || {};

  const status = [
    {
      name: "Suggestion",
      id: 0,
    },
    {
      name: "Planned",
      id: 1,
    },
    {
      name: "In progress",
      id: 2,
    },
    {
      name: "Live",
      id: 3,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const editedFeedback = {
      id,
      title: feedbackTitle.current.value,
      category: feedbackCategory.current.textContent,
      status: feedbackStatus.current.textContent,
      description: feedbackDetail.current.value,
    };

    dispatch(editFeedbackThunk(editedFeedback));
    navigate(-1);
  };

  const handleDeleteButtonClick = () => {
    dispatch(deleteFeedbackThunk(id));
    navigate("/");
  };

  return {
    feedbackCategory,
    feedbackTitle,
    feedbackStatus,
    feedbackDetail,
    categories,
    feedbacksStatus,
    title,
    description,
    category,
    status,
    handleFormSubmit,
    handleDeleteButtonClick,
  };
};
