import { Banner } from "../components/banner";
import { Card } from "../components/card";
import { CardDd, CardDl, CardDlContent, CardDt, CardHeader, CardHeading, CardLink, SideBarInner, SidebarWrapper } from "./sidebar.style";
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
          <Card flexed={false} onClick={handleCategoryFilter}>
            <CardHeader>
              <CardHeading>Roadmap</CardHeading>
              <CardLink to="/roadmap">View</CardLink>
            </CardHeader>
            <CardDl>
              <CardDlContent color={'#F49F85'}>
                <CardDt>Planned</CardDt>
                <CardDd>2</CardDd>
              </CardDlContent>
              <CardDlContent color={'#AD1FEA'}>
                <CardDt>In-Progress</CardDt>
                <CardDd>2</CardDd>
              </CardDlContent>
              <CardDlContent color={'#62BCFA'}>
                <CardDt>Live</CardDt>
                <CardDd>2</CardDd>
              </CardDlContent>
            </CardDl>
          </Card>
        </SideBarInner>
      </SidebarWrapper>
    );
  }
);
