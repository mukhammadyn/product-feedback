import styled from "styled-components";

import arrowIcon from '@images/icons/icon-arrow-left.svg'

export const FeedbackModalWrapper = styled.div`
  max-width: 540px;
  margin: 0 auto;
`

export const FeedbackModalBackLink = styled.button`
  display: inline-flex;
  align-items: center;

  margin-bottom: 68px;
  padding: 0;

  font: var(--font-bolder-sm-style);
  text-decoration: none;
  color: var(--color-button-ocean);

  background-color: transparent;
  border: none;
  cursor: pointer;

  &:before {
    width: 7px;
    height: 10px;

    margin-right: 16px;

    background-image: url(${arrowIcon});
    background-repeat: no-repeat;
    background-position: center;

    content: '';
  }
`