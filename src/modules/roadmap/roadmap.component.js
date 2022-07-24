import { Button } from "@atoms/button/button.component";
import {
  RoadMapHeader,
  RoadMapHeaderContent,
  RoadMapHeaderHeading,
  RoadMapHeaderLink,
} from "./roadmap.style";

export const RoadMap = () => {
  return (
    <RoadMapHeader>
      <RoadMapHeaderContent>
        <RoadMapHeaderLink to="/">Go Back</RoadMapHeaderLink>
        <RoadMapHeaderHeading>Roadmap</RoadMapHeaderHeading>
      </RoadMapHeaderContent>
      <Button isButton={false} address="/new-feedback" text="+ Add Feedback" />
    </RoadMapHeader>
  );
};
