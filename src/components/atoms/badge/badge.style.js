import styled from "styled-components";

export const BadgeWrapper = styled.div`
  display: inline-block;

  padding: 5px 16px;

  color: var(--color-link);

  background-color: #f2f4ff;
  border: none;
  border-radius: 10px;
`;

export const BadgeBtn = styled.button`
  padding: 5px 16px;
  color: var(--color-link);

  background-color: #f2f4ff;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #cfd7ff;
  }

  ${
    props => props.isActive && 'background-color: var(--color-link); color: #fff'
  }
`;

export const BadgeText = styled.span`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
`;
