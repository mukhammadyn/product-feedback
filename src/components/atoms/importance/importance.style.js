import styled from "styled-components"

export const ImportanceBtn = styled.button`
  width: 40px;
  height: 53px;

  position: relative;
  z-index: 10;

  padding: 15px 0 8px 0;

  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color:  ${props => props.isUpvoted ? '#fff' : 'var(--color-primary)'};

  background-color: ${props => props.isUpvoted ? '#4661E6' : '#F2F4FE'};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #CFD7FF;
  }
`

export const ImportanceBtnInner = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImportanceCount = styled.span`
  margin-top: 8px;
`
