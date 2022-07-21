import { useEffect, useState } from "react";

export const useCustomSelectProps = ({
  data=[{ name: "label", id: 0 }]
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
      if (isOpen && !e.target.matches("header")) {
        setOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", closer);
    }

    return () => window.removeEventListener("click", closer);
  }, [isOpen]);

  return {
    isOpen,
    setOpen,
    items,
    setItems,
    selectedItem,
    setSelectedItem,
    handleSelectClick,
    handleSelectItemClick,
  }

}