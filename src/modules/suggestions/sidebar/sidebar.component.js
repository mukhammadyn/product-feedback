import { Banner } from "../components/banner";
import { Card } from "../components/card";
import { SideBarInner, SidebarWrapper } from "./sidebar.style";
import { Badge } from "@atoms/badge";
import { useSidebarProps } from "./sidebar.props";
import hoc from "@utils/hoc";

export const Sidebar = hoc(
  useSidebarProps,
  ({ handleCategoryFilter, isActive, categories }) => {
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
  }
);
