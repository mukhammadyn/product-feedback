import { useEffect, useState } from "react";

import arrowIcon from "@images/icons/icon-arrow-down.svg";

import {
  ArrowIcon,
  CustomSelectItem,
  CustomSelectList,
  CustomSelectSelectedItem,
  CustomSelectWrapper,
} from "./custom-select.style";

export const CustomSelect = ({
  data = [{ name: "label", id: 0 }],
  defaultVal = "",
  innerRef,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItems] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectClick = () => setOpen(!isOpen);

  const handleSelectItemClick = (id) => {
    setOpen(!isOpen);
    setSelectedItem(items.find((item) => item.id === id));
  };

  useEffect(() => {
    setItems(data);
  }, [data]);

  useEffect(() => {

    const closer = (e) => {
      if(isOpen && !e.target.matches('header')) {
        setOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", closer);
    }

    return () => window.removeEventListener("click", closer);
  }, [isOpen]);

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
};
