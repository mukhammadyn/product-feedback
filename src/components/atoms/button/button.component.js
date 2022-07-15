import { ButtonWrapper, LinkWrapper } from "./button.style";

export const Button = (props) => {
  const {
    text,
    isButton = true,
    address = "/",
    type = "button",
    bgColor = 'var(--color-button-singapore)',
    hover = 'var(--color-button-singapore-hover)'
  } = props;


  if (isButton) return <ButtonWrapper type={type} bgColor={bgColor} hover={hover}> {text} </ButtonWrapper>;
  else return <LinkWrapper to={address} state={{bgColor}} hover={hover}> {text} </LinkWrapper>
};
