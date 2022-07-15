import styled from "styled-components"

export const CommentBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  ${props => props.count < 1 && 'opacity: 0.5'}
`

export const CommentBtnInner = styled.span`
  display: inline-flex;
  align-items: center;
`

export const CommentBtnCount = styled.span`
  margin-left: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.222222px;
  color: var(--color-primary)
`
