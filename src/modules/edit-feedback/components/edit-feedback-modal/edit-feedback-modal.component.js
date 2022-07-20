import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getCategories } from "@store/category.slice";

import { CustomSelect } from "@global-components/custom-select/custom-select.component";
import { Button } from "@atoms/button/button.component";
import { FormControl } from "../form-control/form-control.component";
import { FormControlInput } from "../formControlInput/form-control-input.component";
import {
  EditFeedbackBottom,
  EditFeedbackFormControl,
  EditFeedbackModalIcon,
  EditFeedbackModalWrapper,
  EditFeedbackModalWrapperHeading,
} from "./edit-feedback.style";
import { useNavigate, useParams } from "react-router-dom";
import { editFeedbackThunk, deleteFeedbackThunk } from "@store/feedback.slice";

export const EditFeedbackModal = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const feedbacks = useSelector((state) => state.feedbacks.feedbacks);

  const categories = useSelector((state) => state.categories.categories);
  const isLoading = useSelector((state) => state.feedbacks.loading);

  const feedbackCategory = useRef();
  const feedbackTitle = useRef();
  const feedbackStatus = useRef();
  const feedbackDetail = useRef();

  const current = feedbacks.find((fb) => fb.id == id);

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
    e.preventDefault()
    console.log(feedbackStatus);

    const editedFeedback = {
      id,
      title: feedbackTitle.current.value,
      category: feedbackCategory.current.textContent,
      status: feedbackStatus.current.textContent,
      description: feedbackDetail.current.value,
    }

    dispatch(editFeedbackThunk(editedFeedback))
    navigate(-1)
  }

  const handleDeleteButtonClick = () => {
    dispatch(deleteFeedbackThunk(id))
    navigate('/')
  }

  return (
    <EditFeedbackModalWrapper action="#" method="POST" isLoading={isLoading} onSubmit={handleFormSubmit}>
      <EditFeedbackModalIcon />
      <EditFeedbackModalWrapperHeading>
        Editing ‘{title}’
      </EditFeedbackModalWrapperHeading>
      <EditFeedbackFormControl>
        <FormControl
          heading="Feedback Title"
          desc="Add a short, descriptive headline"
          children={<FormControlInput innerRef={feedbackTitle} name="feedback_title" value={title} />}
        />
      </EditFeedbackFormControl>
      <EditFeedbackFormControl>
        <FormControl
          heading="Category"
          desc="Choose a category for your feedback"
          children={
            <CustomSelect
              innerRef={feedbackCategory}
              data={categories}
              defaultVal={category}
            />
          }
        />
      </EditFeedbackFormControl>
      <EditFeedbackFormControl>
        <FormControl
          heading="Update Status"
          desc="Change feedback state"
          children={
            <CustomSelect
              innerRef={feedbackStatus}
              data={status}
              defaultVal={status[0]?.name}
            />
          }
        />
      </EditFeedbackFormControl>
      <EditFeedbackFormControl>
        <FormControl
          heading="Feedback Detail"
          desc="Include any specific comments on what should be improved, added, etc."
          children={
            <FormControlInput
              innerRef={feedbackDetail}
              name="feedback_detail"
              isInput={false}
              value={description}
            />
          }
        />
      </EditFeedbackFormControl>
      <EditFeedbackBottom>
        <Button
          text="Delete"
          bgColor="var(--color-button-blood)"
          hover="#656EA3"
          onClick={handleDeleteButtonClick}
        />
        <Button
          text="Cancel"
          isButton={false}
          bgColor="var(--color-primary)"
          hover="#656EA3"
          address="/"
        />
        <Button type="submit" text="Add Feedback" />
      </EditFeedbackBottom>
    </EditFeedbackModalWrapper>
  );
};
