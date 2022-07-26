import styled from "styled-components";
import checkIcon from "@images/icons/icon-check.svg";
import arrowTop from "@images/icons/arrow-top-white.svg";

export const SortSelectWrapper = styled.div`
  width: 255px;
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 410px) {
    width: 200px;
  }
`;

export const SortSelectHeader = styled.header``;

export const SortSelectCurrentType = styled.button`
  padding: 0;

  color: #f2f4fe;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SortSelectCurrentTypeInner = styled.span`
  display: inline-flex;
  align-items: center;

  margin: 0;

  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #f2f4fe;
  

  & span {
    font-weight: 400;
    opacity: 0.75;
  }

  &::after {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    background-image: url(${arrowTop});
    background-repeat: no-repeat;
    background-position: center;
    ${props => props.open && 'transform: rotate(180deg);'}
    transition: transform 0.2s ease;
    content: '';
  }
`;

export const SortSelectList = styled.ul`
  width: 100%;

  position: absolute;
  z-index: 1;
  top: calc(26px + 32px);
  left: 0;

  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;
  list-style: none;

  overflow: hidden;

  background-color: #ffffff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.3);
  border-radius: 10px;
`;

export const SortSelectItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 24px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgb(100 113 150 / 15%);
  }

  &:hover {
    color: #ad1fea;
  }

  &::after {
    width: 13px;
    height: 11px;
    background-repeat: no-repeat;
    background-position: center;
    ${(props) => props.isSelected && `background-image: url(${checkIcon});`}
    content: '';
  }
`;
