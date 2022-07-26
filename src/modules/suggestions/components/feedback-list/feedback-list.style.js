import styled from "styled-components";

export const FeedbackListWrapper = styled.div`
  display: grid;
  row-gap: 20px;

  @media only screen and (max-width: 990px) {
    row-gap: 16px;
  }

  @media only screen and (max-width: 700px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`