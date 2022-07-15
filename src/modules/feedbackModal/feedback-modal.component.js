import { FormFeedbackModal } from "./components/formModal";
import { FeedbackModalBackLink, FeedbackModalWrapper } from "./feedback-modal.style";

export const FeedbackModal = () => {
  return (
    <FeedbackModalWrapper>
      <FeedbackModalBackLink to='/'>Go Back</FeedbackModalBackLink>
      <FormFeedbackModal />
    </FeedbackModalWrapper>
  );
};
