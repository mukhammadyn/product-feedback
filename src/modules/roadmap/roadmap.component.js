import { Button } from "@atoms/button/button.component";
import { RoadMapCard } from "./components/roadmap-card";
import { useRoadMapProps } from "./roadmap.props";
import hoc from "@utils/hoc"
import {
  RoadMapBoard,
  RoadMapBoardItem,
  RoadMapBoardItemDesc,
  RoadMapBoardItemHeading,
  RoadMapBoardItemTop,
  RoadMapHeader,
  RoadMapHeaderContent,
  RoadMapHeaderHeading,
  RoadMapHeaderLink,
  RoadMapItem,
  RoadMapList,
  RoadMapMain,
  RoadMapSection,
} from "./roadmap.style";

export const RoadMap = hoc(
  useRoadMapProps,
  ({ planned, commentCount, progress, live }) => {
    return (
      <RoadMapSection>
        <RoadMapHeader>
          <RoadMapHeaderContent>
            <RoadMapHeaderLink to="/">Go Back</RoadMapHeaderLink>
            <RoadMapHeaderHeading>Roadmap</RoadMapHeaderHeading>
          </RoadMapHeaderContent>
          <Button
            isButton={false}
            address="/new-feedback"
            text="+ Add Feedback"
          />
        </RoadMapHeader>
        <RoadMapMain>
          <RoadMapBoard>
            <RoadMapBoardItem>
              <RoadMapBoardItemTop>
                <RoadMapBoardItemHeading>
                  Planned ({planned.length})
                </RoadMapBoardItemHeading>
                <RoadMapBoardItemDesc>
                  Ideas prioritized for research
                </RoadMapBoardItemDesc>
              </RoadMapBoardItemTop>
              <RoadMapList>
                {planned?.map(
                  ({
                    id,
                    title,
                    upvotes,
                    description,
                    isUpvoted,
                    comments,
                  }) => (
                    <RoadMapItem key={id}>
                      <RoadMapCard
                        key={id}
                        title={title}
                        upvotes={upvotes}
                        description={description}
                        isUpvoted={isUpvoted}
                        commentCount={commentCount(comments)}
                        id={id}
                        status="planned"
                      ></RoadMapCard>
                    </RoadMapItem>
                  )
                )}
              </RoadMapList>
            </RoadMapBoardItem>
            <RoadMapBoardItem>
              <RoadMapBoardItemTop>
                <RoadMapBoardItemHeading>
                  In-Progress ({progress.length})
                </RoadMapBoardItemHeading>
                <RoadMapBoardItemDesc>
                  Currently being developed
                </RoadMapBoardItemDesc>
              </RoadMapBoardItemTop>
              <RoadMapList>
                {progress?.map(
                  ({
                    id,
                    title,
                    upvotes,
                    description,
                    isUpvoted,
                    comments,
                  }) => (
                    <RoadMapItem key={id}>
                      <RoadMapCard
                        key={id}
                        title={title}
                        upvotes={upvotes}
                        description={description}
                        isUpvoted={isUpvoted}
                        commentCount={commentCount(comments)}
                        id={id}
                        status="progress"
                      ></RoadMapCard>
                    </RoadMapItem>
                  )
                )}
              </RoadMapList>
            </RoadMapBoardItem>
            <RoadMapBoardItem>
              <RoadMapBoardItemTop>
                <RoadMapBoardItemHeading>
                  Live ({live.length})
                </RoadMapBoardItemHeading>
                <RoadMapBoardItemDesc>Released features</RoadMapBoardItemDesc>
              </RoadMapBoardItemTop>
              <RoadMapList>
                {live?.map(
                  ({
                    id,
                    title,
                    upvotes,
                    description,
                    isUpvoted,
                    comments,
                  }) => (
                    <RoadMapItem key={id}>
                      <RoadMapCard
                        key={id}
                        id={id}
                        title={title}
                        upvotes={upvotes}
                        description={description}
                        isUpvoted={isUpvoted}
                        commentCount={commentCount(comments)}
                        status="live"
                      ></RoadMapCard>
                    </RoadMapItem>
                  )
                )}
              </RoadMapList>
            </RoadMapBoardItem>
          </RoadMapBoard>
        </RoadMapMain>
      </RoadMapSection>
    );
  }
);
