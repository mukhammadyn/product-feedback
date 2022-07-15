import styled from "styled-components"

import plusIcon from "@images/icons/icon-new-feedback.svg"

export const FormFeedbackModalWrapper = styled.form`
  max-width: 540px;

  position: relative;
  z-index: 10;

  margin: 0 auto;
  padding: 52px 42px 40px 42px;

  background: #FFFFFF;
  border-radius: 10px;

  ${props => props.isLoading && 'cursor: wait;'}
`

export const FormFeedbackModalIcon = styled.span`
  width: 56px;
  height: 56px;

  position: absolute;
  z-index: 1;
  left: 42px;
  top: -23px;

  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: center;

  display: inline-block;
`

export const FormFeedbackModalWrapperHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
`

export const FormFeedbackFormControl = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const FormFeedbackBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
`
