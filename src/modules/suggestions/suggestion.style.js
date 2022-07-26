import styled from "styled-components";

export const SuggestionMain = styled.article`
  display: grid;
  grid-template-columns: 255px 1fr;
  column-gap: 30px;

  @media only screen and (max-width: 990px) {
    grid-template-columns: auto;
    column-gap: 0;
    row-gap: 40px;
  }

  @media only screen and (max-width: 700px) {
    row-gap: 0;
  }
`
