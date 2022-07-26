import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 255px;

  padding: 24px;

  background-color: #fff;
  border-radius: 10px;

  ${props => props.flexed && 'display: flex; flex-wrap: wrap; row-gap: 14px; column-gap: 8px;'}

  @media only screen and (max-width: 990px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 223px;
  }
`