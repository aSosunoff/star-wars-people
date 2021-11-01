import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { matchPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { routesConfig } from "../../router/routes-config";
import { selectorPathName } from "../../router/selectors-router";
import { Path } from "../../router/path-constant";

export const MainMenu: React.FC = () => {
  const pathname = useSelector(selectorPathName);

  const defaultSelectedKey = useMemo(() => {
    const config = routesConfig.find((config) => matchPath(pathname, config));

    return config ? (config.path as string) : "";
  }, [pathname]);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[defaultSelectedKey]}
    >
      <Menu.Item key={Path.People}>
        <Link to={Path.People}>People</Link>
      </Menu.Item>
      <Menu.Item key={Path.Planets}>
        <Link to={Path.Planets}>Planets</Link>
      </Menu.Item>
    </Menu>
  );
};
