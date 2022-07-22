import { ContainerWrapper } from "./container.style"

export const Container = (props) => {
  return (
    <ContainerWrapper>
      {props.children}
    </ContainerWrapper>
  )
}
