import hoc from "@utils/hoc";
import burgerIcon from "@images/icons/icon-hamburger.svg";
import closeIcon from "@images/icons/icon-close.svg";
import {
  BannerBurgerBtn,
  BannerHeading,
  BannerText,
  BannerWrapper,
  BannerWrapperContent,
} from "./banner.style";
import { useBannerProps } from "./banner.props";

export const Banner = hoc(useBannerProps, ({ handleBurgerClick, open }) => {
  return (
    <BannerWrapper>
      <BannerWrapperContent>
        <BannerHeading>Frontend Mentor</BannerHeading>
        <BannerText>Feedback Board</BannerText>
      </BannerWrapperContent>
      <BannerBurgerBtn onClick={handleBurgerClick}>
        {
          <img
            src={open ? closeIcon : burgerIcon}
            alt="modal toggler"
            width="20"
            height="17"
          />
        }
      </BannerBurgerBtn>
    </BannerWrapper>
  );
});
