import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addComment, addReplyComment } from "@store/feedback.slice";
import { useEffect } from "react";

export const useCommentForm = ({ repliedUser, setRepliedUser }) => {
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
          repliedUserId: repliedUser.id,
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

  return {
    comment,
    charLimit,
    commentRef,
    handleOnCommentChange,
    handleFormSubmit,
  };
};
