import { Link } from "react-router-dom";
import styled from "styled-components";
import backIcon from "@images/icons/arrow-top-white.svg";

export const RoadMapSection = styled.div`
  margin-top: -16px;
`;

export const RoadMapHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;
  padding: 27px 40px 32px 27px;

  background: #373f68;
  border-radius: 10px;

  @media only screen and (max-width: 645px) {
    margin-bottom: 0;
    border-radius: 0;
  }
`;

export const RoadMapHeaderContent = styled.div``;

export const RoadMapHeaderLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  margin-bottom: 4px;

  text-decoration: none;
  font: var(--font-bolder-sm-style);
  color: #fff;

  &:hover {
    text-decoration: underline;
  }

  &::before {
    width: 10px;
    height: 10px;

    margin-right: 16px;

    transform: rotate(90deg);

    background-image: url(${backIcon});
    background-repeat: no-repeat;
    background-position: center;
    content: "";
  }
`;

export const RoadMapHeaderHeading = styled.h2`
  margin: 0;

  color: #fff;
`;
export const RoadMapMain = styled.div``;

export const RoadMapBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;

  @media only screen and (max-width: 870px) {
    column-gap: 10px;
  }

  @media only screen and (max-width: 645px) {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
`;

export const RoadMapBoardItem = styled.div`
  @media only screen and (max-width: 645px) {
    display: none;
    ${(props) =>
      props.active === props.roadMap &&
      "display: block;"
    }
  }
`;

export const RoadMapBoardItemTop = styled.div``;

export const RoadMapBoardItemHeading = styled.h3``;

export const RoadMapBoardItemDesc = styled.p``;

export const RoadMapList = styled.ul`
  display: grid;
  row-gap: 24px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RoadMapItem = styled.li``;

export const RoadMapNav = styled.nav`
  display: none;

  @media only screen and (max-width: 645px) {
    display: block;
  }
`;

export const RoadMapNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RoadMapNavItem = styled.li`
  flex-grow: 1;
`;

export const RoadMapNavBtn = styled.button`
  width: 100%;

  padding: 20px 0;

  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.180556px;
  color: rgb(58 67 116 / 0.4);

  background: transparent;
  border: none;
  border-bottom: 4px solid transparent;
  cursor: pointer;

  ${(props) =>
    props.active === props.roadMap &&
    "border-bottom-color: #AD1FEA; color: #3a4374;"
  }
`;
