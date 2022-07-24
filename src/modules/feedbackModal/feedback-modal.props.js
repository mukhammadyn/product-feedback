import { useNavigate } from "react-router-dom"

export const useFeedbackModalProps = () => {
  const navigate = useNavigate()
  const handleBtnClick = () => {
    navigate(-1)
  }

  return {
    handleBtnClick,
  }
}