import { Button } from "@atoms/button";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment, addReplyComment } from "@store/feedback.slice";

import {
  CommentFormBottom,
  CommentFormControl,
  CommentFormCount,
  CommentFormHeading,
  CommentFormWrapper,
} from "./comment-form.style";

export const CommentForm = ({ dataUserName, repliedUser, setRepliedUser, id }) => {
  const MAX_LENGTH = 250;

  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [charLimit, setCharLimit] = useState(MAX_LENGTH);

  const commentRef = useRef();

  const handleOnCommentChange = () => {
    const comment = commentRef.current.value;

    if (comment.length >= 0 && comment.length <= MAX_LENGTH) {
      setComment(comment);
      setCharLimit(MAX_LENGTH - comment.length);
    }

    if (repliedUser.username && !comment.match(repliedUser.username)) {
      setRepliedUser({});
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (commentRef.current.value.trim() && !repliedUser.username) {

      dispatch(
        addComment({
          id: commentRef.current.id,
          comment: commentRef.current.value,
        })
      );
      setComment("");

    } else if (commentRef.current.value.trim() && repliedUser.username) {

      dispatch(
        addReplyComment({
          id: commentRef.current.id,
          comment: commentRef.current.value,
          repliedUser: repliedUser.username,
          repliedUserId: repliedUser.id
        })
      );
      setComment("");

    }
  };

  useEffect(() => {
    if (repliedUser.username) {
      setComment("@" + repliedUser.username);
      commentRef.current.focus();
    }
  }, [repliedUser.username]);

  return (
    <CommentFormWrapper
      data-user-name={dataUserName}
      action="#"
      method="POST"
      onSubmit={handleFormSubmit}
    >
      <CommentFormHeading>Add Comment</CommentFormHeading>
      <CommentFormControl
        ref={commentRef}
        value={comment}
        onChange={handleOnCommentChange}
        placeholder="Type your comment here"
        name="comment"
        data-user="unknown"
        id={id}
      />
      <CommentFormBottom>
        <CommentFormCount>{charLimit} Characters left</CommentFormCount>
        <Button type="submit" text="Post Comment" />
      </CommentFormBottom>
    </CommentFormWrapper>
  );
};
