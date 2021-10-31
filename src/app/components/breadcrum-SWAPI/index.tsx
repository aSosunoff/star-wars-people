import { Breadcrumb } from "antd";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Path } from "../../router/path-constant";
import { selectorPathName } from "../../router/selectors-router";

export const BreadcrumbSWAPI: React.FC = () => {
  const pathname = useSelector(selectorPathName);

  const namePath = useMemo(
    () => Object.entries(Path).find(([, value]) => value === pathname)?.[0],
    [pathname]
  );

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {namePath ? <Breadcrumb.Item>{namePath}</Breadcrumb.Item> : null}
    </Breadcrumb>
  );
};
