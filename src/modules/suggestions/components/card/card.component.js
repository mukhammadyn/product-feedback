import { CardWrapper } from "./card.style"

export const Card = ({children, flexed, onClick}) => {
  return (
    <CardWrapper flexed={flexed} onClick={onClick}>
      {children}
    </CardWrapper>
  )
}
