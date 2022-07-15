import styled from "styled-components"
import { CommentList } from "../feedback-detail.style"
export {CommentList}

export const CommentItem = styled.li`
  &:not(:last-child) {
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  }

  & ${CommentList} {
    margin-left: 23px;
    padding-left: 24px;
    border-left: 1px solid rgb(100 113 150 / 0.1);

    & li {
      border-bottom: none;
    }
  }
`

export const CommentItemInner = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 32px;
`

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const CommentItemContent = styled.div`
  flex-grow: 1;
  margin-left: 32px;
`

export const CommentItemContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 17px;
`

export const CommentItemHeading = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.194444px;
  color: #3A4374;
`

export const CommentItemNickname = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #647196;
`

export const CommentItemReplyBtn = styled.button`
  padding: 0;

  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661E6;

  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const CommentItemContentMessage = styled.p`
  margin: 0;

  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #647196;
`

export const CommentItemContentMessageReplyingTo = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: var(--color-button-singapore);

  &::after {
    content: '\t';
  }
`