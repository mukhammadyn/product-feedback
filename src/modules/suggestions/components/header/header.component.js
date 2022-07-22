import { Button } from "@atoms/button";
import hoc from "@utils/hoc";
import {
  HeaderSuggestionCount,
  HeaderSuggestionSort,
  HeaderWrapper,
} from "./header.style";
import lampIcon from "@images/icon-suggestions.svg";
import { SortSelect } from "../sort-select";
import { useHeaderProps } from "./header.props";

export const Header = hoc(useHeaderProps, ({count}) => {
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
});
