import { CustomSelect } from "@global-components/custom-select";
import { Button } from "@atoms/button/button.component";
import { FormControl } from "../form-control";
import { FormControlInput } from "../formControlInput";
import hoc from "@utils/hoc";
import { useFormFeedbackProps } from "./form-feedback.props";
import {
  FormFeedbackBottom,
  FormFeedbackFormControl,
  FormFeedbackModalIcon,
  FormFeedbackModalWrapper,
  FormFeedbackModalWrapperHeading,
} from "./form-feedback.style";

export const FormFeedbackModal = hoc(
  useFormFeedbackProps,
  ({
    categories,
    isLoading,
    feedbackTitle,
    feedbackCategory,
    feedbackDetail,
    handleFormSubmit,
  }) => {
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
              <FormControlInput
                name="feedback_title"
                innerRef={feedbackTitle}
              />
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
          <Button
            text="Cancel"
            isButton={false}
            isDark={true}
            bgColor="var(--color-primary)"
            hover="#656EA3"
          />
          <Button type="submit" text="Add Feedback" />
        </FormFeedbackBottom>
      </FormFeedbackModalWrapper>
    );
  }
);
