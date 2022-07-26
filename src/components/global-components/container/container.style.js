import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1070px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 700px) {
    padding-left: 0;
    padding-right: 0;
  }
`
