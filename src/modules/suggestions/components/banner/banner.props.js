import { useContext } from "react";
import { NavToggleContext } from "../../context/nav-context";

export const useBannerProps = () => {

  const {open, setOpen} = useContext(NavToggleContext)

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return {
    open,
    setOpen,
    handleBurgerClick
  }
};
