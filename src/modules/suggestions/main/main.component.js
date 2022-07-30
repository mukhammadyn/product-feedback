import { FeedbackList } from "../components/feedback-list/feedback-list.component";
import { Header } from "../components/header";
import { MainWrapper } from "./main.style";
import { useMainProps } from "./main.props";
import hoc from "@utils/hoc";

export const Main = hoc(useMainProps, ({feedbacksStatus, feedbacks}) => {
  return (
    <MainWrapper>
      <Header feedbacks={feedbacks} />
      {feedbacksStatus === 'loading' ? <b>Loading...</b> : <FeedbackList feedbacks={feedbacks} />}
    </MainWrapper>
  );
});
