import arrowIcon from "@images/icons/icon-arrow-down.svg";

import {
  ArrowIcon,
  CustomSelectItem,
  CustomSelectList,
  CustomSelectSelectedItem,
  CustomSelectWrapper,
} from "./custom-select.style";
import hoc from "@utils/hoc";
import { useCustomSelectProps } from "./custom-select.props";

export const CustomSelect = hoc(
  useCustomSelectProps,
  ({
    data,
    defaultVal = "",
    innerRef,
    isOpen,
    setOpen,
    items,
    setItems,
    selectedItem,
    handleSelectClick,
    handleSelectItemClick,
  }) => {

    return (
      <CustomSelectWrapper>
        <CustomSelectSelectedItem onClick={handleSelectClick} isOpen={isOpen}>
          <span ref={innerRef}>
            {selectedItem ? selectedItem.name : defaultVal}
          </span>
          <ArrowIcon
            src={arrowIcon}
            alt=""
            width="10"
            height="7"
            isOpen={isOpen}
          ></ArrowIcon>
        </CustomSelectSelectedItem>

        <CustomSelectList isOpen={isOpen}>
          {items.length > 0 &&
            items?.map(({ id, name }) => (
              <CustomSelectItem
                isSelected={selectedItem && selectedItem.id === id}
                id={id}
                key={id}
                onClick={() => handleSelectItemClick(id)}
              >
                {name}
              </CustomSelectItem>
            ))}
        </CustomSelectList>
      </CustomSelectWrapper>
    );
  }
);
