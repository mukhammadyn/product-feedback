import styled from "styled-components";
import checkIcon from "@images/icons/icon-check.svg";

export const CustomSelectWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const CustomSelectSelectedItem = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 13px 22px 13px 24px;

  color: #3a4374;

  background: #f7f8fd;
  border: 1px solid ${props => props.isOpen ? '#4661E6' : 'transparent'};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 1px solid #4661E6;
  }
`;

export const ArrowIcon = styled.img`
  ${(props) => props.isOpen && "transform: rotate(180deg);"}
  transition: transform 0.2s ease;
`;

export const CustomSelectList = styled.ul`
  width: 100%;

  position: absolute;
  z-index: 1;
  top: calc(100% + 16px);
  left: 0;

  display: ${(props) => (props.isOpen ? "flex;" : "none;")}
  flex-direction: column;

  margin: 0;
  padding: 0;
  list-style: none;

  overflow: hidden;

  background-color: #ffffff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.3);
  border-radius: 10px;
`;

export const CustomSelectItem = styled.li`
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
