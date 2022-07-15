import commentIcon from '@images/icons/icon-comments.svg'
import { CommentBtn, CommentBtnCount, CommentBtnInner } from './comment.style'

export const Comment = ({count = 0}) => {
  return(
    <CommentBtn count={count}>
      <CommentBtnInner>
        <img src={commentIcon} alt="comment" width="18" height="16"/>
        <CommentBtnCount>
          {count}
        </CommentBtnCount>
      </CommentBtnInner>
    </CommentBtn>
  )
}
