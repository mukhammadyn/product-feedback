import styled from "styled-components";

import editIcon from "@images/icons/icon-edit-feedback.svg";

export const EditFeedbackModalWrapper = styled.form`
  max-width: 540px;

  position: relative;
  z-index: 10;

  margin: 0 auto;
  padding: 52px 42px 40px 42px;

  background: #ffffff;
  border-radius: 10px;
`;

export const EditFeedbackModalIcon = styled.span`
  width: 56px;
  height: 56px;

  position: absolute;
  z-index: 1;
  left: 42px;
  top: -23px;

  background-image: url(${editIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: inline-block;
`;

export const EditFeedbackModalWrapperHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
`;

export const EditFeedbackFormControl = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const EditFeedbackBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;

  & button:first-child {
    margin-right: auto;
  }
`;
