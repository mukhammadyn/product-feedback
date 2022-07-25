import { Link } from "react-router-dom"
import styled from "styled-components"
import backIcon from "@images/icons/arrow-top-white.svg"

export const RoadMapSection = styled.div`
  margin-top: -16px;
`

export const RoadMapHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;
  padding: 27px 40px 32px 27px;

  background: #373F68;
  border-radius: 10px;
`

export const RoadMapHeaderContent = styled.div``

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
    content: '';
  }
`

export const RoadMapHeaderHeading = styled.h2`
  margin: 0;

  color: #fff;
`
export const RoadMapMain = styled.div``

export const RoadMapBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
`

export const RoadMapBoardItem = styled.div``

export const RoadMapBoardItemTop = styled.div``

export const RoadMapBoardItemHeading = styled.h3``

export const RoadMapBoardItemDesc = styled.p``

export const RoadMapList = styled.ul`
  display: grid;
  row-gap: 24px;

  margin: 0;
  padding: 0;
  list-style: none;
`

export const RoadMapItem = styled.li``
