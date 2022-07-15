import { Route, Routes } from "react-router-dom";
import { Container } from "./components/global-components/container";
import { FeedbackDetail } from "./modules/feedback-detail";
import { FeedbackModal } from "./modules/feedbackModal";
import { Suggestion } from "./modules/suggestions";
function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Suggestion />} />
        <Route path="feedback-detail/:id" element={<FeedbackDetail />} />
        <Route path="new-feedback" element={<FeedbackModal />} />
        <Route path="*" element={<Suggestion />} />
      </Routes>
    </Container>
  );
}

export default App;
