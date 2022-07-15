import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: relative;
`

export const SideBarInner = styled.div`
  position: sticky;
  top: 0;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 24px;
`
