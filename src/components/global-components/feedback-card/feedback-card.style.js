import { Link } from "react-router-dom"
import styled from "styled-components"

export const FeedbackCardWrapper = styled.div`
  position: relative;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 28px 32px;

  background-color: #fff;
  border-radius: 10px;

  @media only screen and (max-width: 700px) {
    align-items: flex-end;
  }
`

export const FeedbackContent = styled.div`
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`

export const FeedbackCardContent = styled(Link)`
  margin-left: 40px;

  color: var(--color-primary);
  text-decoration: none;

  &::before {
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;

    content: '';
  }

  @media only screen and (max-width: 700px) {
    margin-left: 0;
    margin-bottom: 16px;
  }
`

export const FeedbackCardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 4px;

  font: var(--font-bolder-xl-style);
  letter-spacing: -0.25px;

  @media only screen and (max-width: 450px) {
    font-size: var(--font-bold-size);
    line-height: 18px;
  }
`

export const FeedbackCardDesc = styled.p`
  margin-top: 0;
  margin-bottom: 12px;

  font: var(--font-secondary-style);

  @media only screen and (max-width: 450px) {
    font-size: 13px;
    line-height: 19px;
  }
`
