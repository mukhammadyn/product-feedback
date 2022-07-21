import { CustomSelect } from "@global-components/custom-select";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@atoms/button/button.component";
import { getCategories } from "@store/category.slice";
import { addNewFeedback } from "@store/feedback.slice";
import { FormControl } from "../form-control";
import { FormControlInput } from "../formControlInput";
import {
  FormFeedbackBottom,
  FormFeedbackFormControl,
  FormFeedbackModalIcon,
  FormFeedbackModalWrapper,
  FormFeedbackModalWrapperHeading,
} from "./form-feedback.style";
import { useNavigate } from "react-router-dom";

export const FormFeedbackModal = () => {
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

  return (
    <FormFeedbackModalWrapper
      action="#"
      method="POST"
      onSubmit={(e) => handleFormSubmit(e)}
      isLoading={isLoading}
    >
      <FormFeedbackModalIcon />
      <FormFeedbackModalWrapperHeading>
        Create New Feedback
      </FormFeedbackModalWrapperHeading>
      <FormFeedbackFormControl>
        <FormControl
          heading="Feedback Title"
          desc="Add a short, descriptive headline"
          children={
            <FormControlInput name="feedback_title" innerRef={feedbackTitle} />
          }
        />
      </FormFeedbackFormControl>
      <FormFeedbackFormControl>
        <FormControl
          heading="Category"
          desc="Choose a category for your feedback"
          children={
            <CustomSelect
              innerRef={feedbackCategory}
              data={categories}
              defaultVal={categories[0]?.name}
            />
          }
        />
      </FormFeedbackFormControl>
      <FormFeedbackFormControl>
        <FormControl
          heading="Feedback Detail"
          desc="Include any specific comments on what should be improved, added, etc."
          children={
            <FormControlInput
              innerRef={feedbackDetail}
              name="feedback_detail"
              isInput={false}
            />
          }
        />
      </FormFeedbackFormControl>
      <FormFeedbackBottom>
        <Button text="Cancel" isButton={false} isDark={true} bgColor="var(--color-primary)" hover="#656EA3" />
        <Button type="submit" text="Add Feedback" />
      </FormFeedbackBottom>
    </FormFeedbackModalWrapper>
  );
};
