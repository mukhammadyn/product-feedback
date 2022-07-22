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
import { useEditFeedbackModalProps } from "./edit-feedback-modal.props";
import hoc from "@utils/hoc";

export const EditFeedbackModal = hoc(
  useEditFeedbackModalProps,
  ({
    categories,
    isLoading,
    title,
    description,
    category,
    status,
    handleFormSubmit,
    handleDeleteButtonClick,
    feedbackCategory,
    feedbackTitle,
    feedbackStatus,
    feedbackDetail
  }) => {
    return (
      <EditFeedbackModalWrapper
        action="#"
        method="POST"
        isLoading={isLoading}
        onSubmit={handleFormSubmit}
      >
        <EditFeedbackModalIcon />
        <EditFeedbackModalWrapperHeading>
          Editing ‘{title}’
        </EditFeedbackModalWrapperHeading>
        <EditFeedbackFormControl>
          <FormControl
            heading="Feedback Title"
            desc="Add a short, descriptive headline"
            children={
              <FormControlInput
                innerRef={feedbackTitle}
                name="feedback_title"
                value={title}
              />
            }
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
  }
);
