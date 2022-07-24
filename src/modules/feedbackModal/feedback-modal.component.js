import hoc from "@utils/hoc";
import { FormFeedbackModal } from "./components/formModal";
import { useFeedbackModalProps } from "./feedback-modal.props";
import {
  FeedbackModalBackLink,
  FeedbackModalWrapper,
} from "./feedback-modal.style";

export const FeedbackModal = hoc(useFeedbackModalProps, ({handleBtnClick}) => {
  return (
    <FeedbackModalWrapper>
      <FeedbackModalBackLink onClick={handleBtnClick} to="/">Go Back</FeedbackModalBackLink>
      <FormFeedbackModal />
    </FeedbackModalWrapper>
  );
});
