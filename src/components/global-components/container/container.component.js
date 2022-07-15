import { ContainerWrapper } from "./container.style"

export const Container = (props) => {
  // console.log(children);
  return (
    <ContainerWrapper>
      {props.children}
    </ContainerWrapper>
  )
}
