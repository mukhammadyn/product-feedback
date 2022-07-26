import { Banner } from "../components/banner";
import { Card } from "../components/card";
import {
  CardDd,
  CardDl,
  CardDlContent,
  CardDt,
  CardHeader,
  CardHeading,
  CardLink,
  SideBarInner,
  SidebarNav,
  SidebarNavInner,
  SidebarWrapper,
} from "./sidebar.style";
import { Badge } from "@atoms/badge";
import { useSidebarProps } from "./sidebar.props";
import hoc from "@utils/hoc";

export const Sidebar = hoc(
  useSidebarProps,
  ({
    handleCategoryFilter,
    isActive,
    categories,
    planned,
    progress,
    live,
    open,
  }) => {
    return (
      <SidebarWrapper>
        <SideBarInner>
          <Banner />
          <SidebarNav open={open}>
            <SidebarNavInner>
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
              <Card flexed={false} onClick={handleCategoryFilter}>
                <CardHeader>
                  <CardHeading>Roadmap</CardHeading>
                  <CardLink to="/roadmap">View</CardLink>
                </CardHeader>
                <CardDl>
                  <CardDlContent color={"#F49F85"}>
                    <CardDt>Planned</CardDt>
                    <CardDd>{planned}</CardDd>
                  </CardDlContent>
                  <CardDlContent color={"#AD1FEA"}>
                    <CardDt>In-Progress</CardDt>
                    <CardDd>{progress}</CardDd>
                  </CardDlContent>
                  <CardDlContent color={"#62BCFA"}>
                    <CardDt>Live</CardDt>
                    <CardDd>{live}</CardDd>
                  </CardDlContent>
                </CardDl>
              </Card>
            </SidebarNavInner>
          </SidebarNav>
        </SideBarInner>
      </SidebarWrapper>
    );
  }
);
