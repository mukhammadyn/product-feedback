import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 700px) {
  }
`;

export const SideBarInner = styled.div`
  position: sticky;
  top: 0;

  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 24px;

  @media only screen and (max-width: 990px) {
    position: static;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    column-gap: 10px;
    row-gap: 0;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    column-gap: 10px;
  }
`;

export const SidebarNav = styled.div`
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100vh;

    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;

    display: ${(props) => (props.open ? "block" : "none")};

    background-color: rgb(0 0 0 / 50%);
  }
`;

export const SidebarNavInner = styled.div`
  display: grid;
  row-gap: 24px;

  @media only screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 0;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    max-width: 50%;
    height: 100%;

    position: absolute;
    z-index: 1000;
    right: 0;
    top: 0;

    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 0.1fr;
    align-items: start;
    column-gap: 0;
    row-gap: 24px;

    padding: 24px;
  
    background-color: #f7f8fd;
  }

  @media only screen and (max-width: 500px) {
    max-width: 70%;
  }

  @media only screen and (max-width: 400px) {
    max-width: 80%;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const CardHeading = styled.h3`
  margin: 0;
`;

export const CardLink = styled(Link)`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;

  &:hover {
    color: #8397f8;
  }
`;

export const CardDl = styled.dl``;

export const CardDlContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &::before {
    width: 8px;
    height: 8px;
    display: inline-block;
    margin-right: 16px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    content: "";
  }
`;

export const CardDt = styled.dt`
  color: #647196;
  flex-grow: 1;
`;

export const CardDd = styled.dd`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
`;
