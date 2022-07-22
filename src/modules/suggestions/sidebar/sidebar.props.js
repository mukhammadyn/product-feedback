import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, setCategory } from "@store/category.slice";

export const useSidebarProps = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryFilter = (e) => {
    const current = e.target.closest("button") || null;

    if (current && current.id >= 0) {
      setActive(false);
      dispatch(
        setCategory(categories.find((category) => category.id === current.id))
      );
    } else if (current && current.id < 0) {
      setActive(true);
      dispatch(setCategory({ category: "All", id: -1 }));
    }
  };

  return {
    categories,
    isActive,
    handleCategoryFilter
  };
};
