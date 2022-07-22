import { useState } from "react";

export const useBannerProps = () => {
  const [isOpen, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!isOpen);
  };

  return {
    isOpen,
    setOpen,
    handleBurgerClick
  }
};
