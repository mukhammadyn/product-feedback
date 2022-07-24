import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: relative;
`

export const SideBarInner = styled.div`
  position: sticky;
  top: 0;

  display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 24px;
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const CardHeading = styled.h3`
  margin: 0;
`

export const CardLink = styled(Link)`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661E6;

  &:hover {
    color: #8397F8;
  }
`

export const CardDl = styled.dl``

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
    background-color: ${props => props.color};
    border-radius: 50%;
    content: '';
  }
`

export const CardDt = styled.dt`
  color: #647196;
  flex-grow: 1;
`

export const CardDd = styled.dd`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
`
