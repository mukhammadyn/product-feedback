import { EditFeedbackModal } from "./components/edit-feedback-modal"
import { EditFeedbackWrapper, FeedbackModalBackLink } from "./edit-feedback.style"

export const EditFeedback = () => {

  return <EditFeedbackWrapper>
    <FeedbackModalBackLink to='/'>Go Back</FeedbackModalBackLink>
    <EditFeedbackModal />
  </EditFeedbackWrapper>
}
