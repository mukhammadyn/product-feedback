import burgerIcon from "@images/icons/icon-hamburger.svg";
import closeIcon from "@images/icons/icon-close.svg";

import { useState } from "react";

import {
  BannerBurgerBtn,
  BannerHeading,
  BannerText,
  BannerWrapper,
  BannerWrapperContent,
} from "./banner.style";

export const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!isOpen);
  };

  return (
    <BannerWrapper>
      <BannerWrapperContent>
        <BannerHeading>Frontend Mentor</BannerHeading>
        <BannerText>Feedback Board</BannerText>
      </BannerWrapperContent>
      <BannerBurgerBtn onClick={handleBurgerClick}>
        {
          <img
            src={isOpen ? closeIcon : burgerIcon}
            alt="modal toggler"
            width="20"
            height="17"
          />
        }
      </BannerBurgerBtn>
    </BannerWrapper>
  );
};
