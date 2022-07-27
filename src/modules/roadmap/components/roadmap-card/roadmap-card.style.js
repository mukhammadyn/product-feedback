import styled from "styled-components";

const checkStatus = (status) => {
  if(status === 'planned') {
    return '#F49F85'
  } else if(status === 'progress') {
    return '#AD1FEA'
  } else {
    return '#62BCFA'
  }
}

export const RoadMapCardWrapper = styled.article`
  padding: 31px 32px;

  background-color: #fff;
  border-top: 6px solid ${(props) => checkStatus(props.status)};
  border-radius: 5px;
`

export const RoadMapCardStatus = styled.p`
  display: inline-flex;
  align-items: center;

  margin-top: 0;
  margin-bottom: 8px;

  font: var(--font-secondary-style);
  color: #647196;

  &::before {
    width: 8px;
    height: 8px;

    margin-right: 16px;

    background-color: ${(props) => checkStatus(props.status)};
    border-radius: 50%;

    content: '';
  }
`

export const RoadMapCardHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 4px;

  font: var(--font-bolder-md-style);

  & a {
    text-decoration: none;
    color: var(--color-primary);
  }

  @media only screen and (max-width: 870px) {
    font-size: 13px;
    line-height: 19px;
  }
`

export const RoadMapCardDesc = styled.p`
  margin-top: 0;
  margin-bottom: 16px;

  font: var(--font-secondary-style);

  @media only screen and (max-width: 870px) {
    font-size: 13px;
    line-height: 19px;
  }
`

export const RoadMapCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`
