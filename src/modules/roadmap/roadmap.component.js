import { Button } from "@atoms/button/button.component";
import { RoadMapCard } from "./components/roadmap-card";
import { useRoadMapProps } from "./roadmap.props";
import hoc from "@utils/hoc";
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
  RoadMapNav,
  RoadMapNavBtn,
  RoadMapNavItem,
  RoadMapNavList,
  RoadMapSection,
} from "./roadmap.style";

export const RoadMap = hoc(
  useRoadMapProps,
  ({
    planned,
    commentCount,
    progress,
    live,
    activeRoadMap,
    handleButtonClick,
  }) => {
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
        <RoadMapNav>
          <RoadMapNavList onClick={handleButtonClick}>
            <RoadMapNavItem>
              <RoadMapNavBtn active={activeRoadMap} roadMap="planned" data-type="planned">Planned ({planned.length})</RoadMapNavBtn>
            </RoadMapNavItem>
            <RoadMapNavItem>
              <RoadMapNavBtn active={activeRoadMap} roadMap="progress" data-type="progress">In-Progress ({progress.length})</RoadMapNavBtn>
            </RoadMapNavItem>
            <RoadMapNavItem>
              <RoadMapNavBtn active={activeRoadMap} roadMap="live" data-type="live">Live ({live.length})</RoadMapNavBtn>
            </RoadMapNavItem>
          </RoadMapNavList>
        </RoadMapNav>
        <RoadMapMain>
          <RoadMapBoard>
            <RoadMapBoardItem active={activeRoadMap} roadMap="planned">
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
            <RoadMapBoardItem active={activeRoadMap} roadMap="progress">
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
            <RoadMapBoardItem active={activeRoadMap} roadMap="live">
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
