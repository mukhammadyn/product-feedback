import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from "@store/feedback.slice";
import { FeedbackList } from "../components/feedback-list/feedback-list.component";
import { Header } from "../components/header";
import { MainWrapper } from "./main.style";

export const Main = () => {
  const dispatch = useDispatch()

  

  const feedbacks = useSelector(state => state.feedbacks.feedbacks)
  const loading = useSelector(state => state.feedbacks.loading)

  useEffect(() => {
    dispatch(getFeedbacks())
  
    return () => null
  }, [dispatch])

  return(
    <MainWrapper>
      <Header />
      {
        loading ? <b>Loading...</b> : <FeedbackList feedbacks={feedbacks} />
      }
    </MainWrapper>
  )
};
