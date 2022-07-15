import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "@images/icons/icon-arrow-left.svg"

export const FeedbackDetailMain = styled.main`
  max-width: 730px;
  margin: 0 auto;

  padding-bottom: 272px;
`

export const FeedbackDetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const FeedbackDetailBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
  text-decoration: none;

  &::before {
    width: 10px;
    height: 10px;
    margin-right: 18px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }
`

export const FeedbackDetailItem = styled.article`
  margin-bottom: 24px;
`
export const Comments = styled.div`
  padding: 24px 32px 48px;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: #3A4374;

  background: #FFFFFF;
  border-radius: 10px;
`

export const CommentsHeading = styled.p`
  margin: 0;
`

export const CommentList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
