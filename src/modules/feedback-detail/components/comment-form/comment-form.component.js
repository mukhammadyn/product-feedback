import { Button } from "@atoms/button";
import { useCommentForm } from "./comment-form.props";
import hoc from "@utils/hoc";
import {
  CommentFormBottom,
  CommentFormControl,
  CommentFormCount,
  CommentFormHeading,
  CommentFormWrapper,
} from "./comment-form.style";

export const CommentForm = hoc(
  useCommentForm,
  ({
    dataUserName,
    handleFormSubmit,
    id,
    comment,
    handleOnCommentChange,
    charLimit,
    commentRef,
  }) => {
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
  }
);
