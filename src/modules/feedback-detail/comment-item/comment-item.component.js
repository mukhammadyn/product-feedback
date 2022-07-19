import {
  CommentItem,
  CommentItemContent,
  CommentItemContentMessage,
  CommentItemContentMessageReplyingTo,
  CommentItemContentTop,
  CommentItemHeading,
  CommentItemInner,
  CommentItemNickname,
  CommentItemReplyBtn,
  CommentList,
  UserAvatar,
} from "./comment-item.style";

export const CommentItemComponent = ({ comment }) => {
  const { user, content, replies, id } = comment;
  return (
    <CommentItem data-id={id}>
      <CommentItemInner>
        <UserAvatar src={user.image} width="40" height="40" />
        <CommentItemContent>
          <CommentItemContentTop>
            <CommentItemHeading>
              {user.name}
              <CommentItemNickname>@{user.username}</CommentItemNickname>
            </CommentItemHeading>
            <CommentItemReplyBtn data-id={id} data-user={user.username}>
              Reply
            </CommentItemReplyBtn>
          </CommentItemContentTop>
          <CommentItemContentMessage>{content}</CommentItemContentMessage>
        </CommentItemContent>
      </CommentItemInner>
      {replies && (
        <CommentList>
          {comment.replies.map(({ user, replyingTo, content, id }) => (
            <CommentItem key={id}>
              <CommentItemInner>
                <UserAvatar src={user.image} width="40" height="40" />
                <CommentItemContent>
                  <CommentItemContentTop>
                    <CommentItemHeading>
                      {user.name}
                      <CommentItemNickname>
                        @{user.username}
                      </CommentItemNickname>
                    </CommentItemHeading>
                    <CommentItemReplyBtn data-user={user.username}>
                      Reply
                    </CommentItemReplyBtn>
                  </CommentItemContentTop>
                  <CommentItemContentMessage>
                    <CommentItemContentMessageReplyingTo>
                      @{replyingTo}
                    </CommentItemContentMessageReplyingTo>
                    {content}
                  </CommentItemContentMessage>
                </CommentItemContent>
              </CommentItemInner>
            </CommentItem>
          ))}
        </CommentList>
      )}
    </CommentItem>
  );
};
