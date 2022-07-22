import hoc from "@utils/hoc";
import { useSortSelectProps } from "./sort-select.props";
import {
  SortSelectCurrentType,
  SortSelectCurrentTypeInner,
  SortSelectHeader,
  SortSelectItem,
  SortSelectList,
  SortSelectWrapper,
} from "./sort-select.style";

export const SortSelect = hoc(
  useSortSelectProps,
  ({
    handleSortSelectClick,
    open,
    active,
    handleSelectListClick,
    sortList,
  }) => {
    return (
      <SortSelectWrapper>
        <SortSelectHeader>
          <SortSelectCurrentType onClick={handleSortSelectClick}>
            <SortSelectCurrentTypeInner open={open}>
              <span>Sort by : </span>
              {active.name}
            </SortSelectCurrentTypeInner>
          </SortSelectCurrentType>
        </SortSelectHeader>
        {open && (
          <SortSelectList onClick={handleSelectListClick}>
            {sortList.map((item) => (
              <SortSelectItem
                key={item.id}
                id={item.id}
                isSelected={item.id === +active.id}
              >
                {item.name}
              </SortSelectItem>
            ))}
          </SortSelectList>
        )}
      </SortSelectWrapper>
    );
  }
);
