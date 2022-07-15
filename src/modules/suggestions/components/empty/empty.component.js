import { Button } from "@atoms/button"
import detectiveImg from "@images/illustration-empty.svg"
import { EmptyDesc, EmptyHeading, EmptyImage, EmptyWrapper } from "./empty.style"

export const Empty = () => {
  return(
    <EmptyWrapper>
      <EmptyImage src={detectiveImg} alt='' width='129' height='136' />
      <EmptyHeading>There is no feedback yet.</EmptyHeading>
      <EmptyDesc>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</EmptyDesc>
      <Button text='+ Add Feedback' />
    </EmptyWrapper>
  )
}