import { Badge } from "@atoms/badge";
import { Importance } from "@atoms/importance";
import { Comment } from "@atoms/comment";
import {
  FeedbackCardContent,
  FeedbackCardDesc,
  FeedbackCardTitle,
  FeedbackCardWrapper,
  FeedbackContent,
} from "./feedback-card.style";
import { changeUpvote } from "@store/feedback.slice";
import { useDispatch } from "react-redux";

export const FeedbackCard = (props) => {
  const { title, description, commentCount, importanceCount, badgeText, id, isUpvoted } =
    props;

  const dispatch = useDispatch();
  const handleImportance = (id) => {
    dispatch(changeUpvote(id));
  };

  return (
    <FeedbackCardWrapper>
      <FeedbackContent>
        <Importance
          isUpvoted={isUpvoted}
          count={importanceCount}
          onClick={() => handleImportance(id)}
        />
        <FeedbackCardContent  to={`/feedback-detail/${id}`}>
          <FeedbackCardTitle>{title}</FeedbackCardTitle>
          <FeedbackCardDesc>{description}</FeedbackCardDesc>
          <Badge text={badgeText} />
        </FeedbackCardContent>
      </FeedbackContent>
      <Comment count={commentCount} />
    </FeedbackCardWrapper>
  );
};
