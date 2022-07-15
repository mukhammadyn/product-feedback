import styled from "styled-components";

export const BannerWrapper = styled.div`
  max-width: 255px;
  width: 100%;

  padding: 62px 24px 24px 24px;

  color: #fff;

  background-image: var(--primary-gradient);
  border-radius: 10px;
`;

export const BannerWrapperContent = styled.div``;

export const BannerHeading = styled.h3`
  margin: 0;

  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: -0.25px;
`;

export const BannerText = styled.p`
  margin: 0;

  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
`;

export const BannerBurgerBtn = styled.button`
  display: none;

  padding: 0;
  
  background-color: transparent;
  border: none;

  @media only screen and (max-width: 375px) {
    display: inline-block;
  }
`;
