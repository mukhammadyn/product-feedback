import styled from "styled-components";

export const CommentFormWrapper = styled.form`
  width: 100%;
  max-width: 730px;

  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  padding: 24px 32px 32px 32px;

  background-color: #fff;
  border-radius: 10px;
`

export const CommentFormHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 24px;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3A4374;
`

export const CommentFormControl = styled.textarea`
  width: 100%;
  height: 80px;

  padding: 16px 24px;

  background-color: #F7F8FD;
  border: none;
  border-radius: 5px;
  resize: none;
`

export const CommentFormBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`

export const CommentFormCount = styled.p`
  margin: 0;

  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
`
