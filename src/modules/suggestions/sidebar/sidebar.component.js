import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, setCategory } from "../../../store/category.slice";

import { Banner } from "../components/banner";
import { Card } from "../components/card";
import { SideBarInner, SidebarWrapper } from "./sidebar.style";
import { Badge } from "@atoms/badge";

export const Sidebar = () => {
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

  return (
    <SidebarWrapper>
      <SideBarInner>
        <Banner />
        <Card flexed={true} onClick={handleCategoryFilter}>
          <Badge text={"All"} isBtn={true} isActive={isActive} id={-1} />
          {categories.map((category) => (
            <Badge
              key={category.id}
              id={category.id}
              text={category.name}
              isBtn={true}
              isActive={category.isActive}
            />
          ))}
        </Card>
      </SideBarInner>
    </SidebarWrapper>
  );
};
