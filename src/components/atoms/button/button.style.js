import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: inline-block;

  padding: 12px 25px;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #F2F4FE;

  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${props => props.hover};
    ${props => props.isDisabled && 'background-color: var(--color-disabled); cursor: not-allowed; pointer-events: none;'}
  }

  ${props => props.isDisabled && 'background-color: var(--color-disabled);'}

  @media only screen and (max-width: 450px) {
    padding: 12px 16px;

    font-size: 13px;
    line-height: 19px;
  }

`

export const LinkWrapper = styled(Link)`
  display: inline-block;

  padding: 12px 25px;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-decoration:none;
  color: #F2F4FE;

  background-color: ${props => props.state.bgColor};
  border: none;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${props => props.hover};
  }

  @media only screen and (max-width: 450px) {
    padding: 12px 16px;
    
    font-size: 13px;
    line-height: 19px;
  }
`