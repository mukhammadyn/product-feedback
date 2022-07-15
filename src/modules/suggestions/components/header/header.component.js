import { Button } from "@atoms/button";
import {
  HeaderSuggestionCount,
  HeaderSuggestionSort,
  HeaderWrapper,
} from "./header.style";
import lampIcon from "@images/icon-suggestions.svg";
import { SortSelect } from "../sort-select";

export const Header = () => {
  const count = 6;
  return (
    <HeaderWrapper>
      <img src={lampIcon} alt="lamp" />
      <HeaderSuggestionCount>{count} Suggestions</HeaderSuggestionCount>
      <HeaderSuggestionSort>
        <SortSelect />
      </HeaderSuggestionSort>
      <Button
        text="+ Add Feedback"
        isButton={false}
        address={"/new-feedback"}
      />
    </HeaderWrapper>
  );
};
