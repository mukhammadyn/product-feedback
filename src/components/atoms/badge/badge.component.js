import { BadgeBtn, BadgeText, BadgeWrapper } from "./badge.style";

export const Badge = ({ text, isBtn = false, isActive = false, id }) => {
  if (isBtn) {
    return (
      <BadgeBtn id={id} isActive={isActive}>
        <BadgeText>{text}</BadgeText>
      </BadgeBtn>
    );
  } else {
    return (
      <BadgeWrapper>
        <BadgeText>{text}</BadgeText>
      </BadgeWrapper>
    );
  }
};
