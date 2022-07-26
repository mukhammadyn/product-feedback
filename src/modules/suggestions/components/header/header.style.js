import styled from "styled-components"

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 10;

  display: flex;
  align-items: center;

  padding: 14px 16px 14px 24px;

  background-color: var(--color-button-raven);
  border-radius: 10px;

  @media only screen and (max-width: 700px) {
    border-radius: 0;

    & img {
      display: none;
    }
  }
`

export const HeaderSuggestionCount = styled.b`
  display: inline-block;

  margin-left: 16px;

  font: var(--font-bolder-md-style);
  letter-spacing: -0.25px;
  color: #ffffff;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

export const HeaderSuggestionSort = styled.div`
  margin-left: 38px;
  margin-right: auto;

  @media only screen and (max-width: 700px) {
    margin-left: 0;
  }
`
