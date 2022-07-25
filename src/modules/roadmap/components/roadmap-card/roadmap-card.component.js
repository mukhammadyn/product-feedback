import { Badge } from "@atoms/badge";
import { Comment } from "@atoms/comment";
import { Importance } from "@atoms/importance";
import { useDispatch } from "react-redux";
import { changeUpvote } from "@store/feedback.slice";
import {
  RoadMapCardBottom,
  RoadMapCardDesc,
  RoadMapCardHeading,
  RoadMapCardStatus,
  RoadMapCardWrapper,
} from "./roadmap-card.style";
import { Link } from "react-router-dom";

export const RoadMapCard = ({
  status,
  title,
  description,
  upvotes,
  isUpvoted,
  commentCount,
  id,
}) => {

  const dispatch = useDispatch()

  const handleImportance = (id) => {
    dispatch(changeUpvote(id));
  };

  return (
    <RoadMapCardWrapper status={status}>
      <RoadMapCardStatus status={status}>
        {status[0].toUpperCase() + status.slice(1)}
      </RoadMapCardStatus>
      <RoadMapCardHeading><Link to={`/feedback-detail/${id}`}>{title}</Link></RoadMapCardHeading>
      <RoadMapCardDesc>{description}</RoadMapCardDesc>
      <Badge text="Feature" />
      <RoadMapCardBottom>
        <Importance onClick={() => handleImportance(id)} small={true} count={upvotes} isUpvoted={isUpvoted} />
        <Comment count={commentCount} />
      </RoadMapCardBottom>
    </RoadMapCardWrapper>
  );
};
