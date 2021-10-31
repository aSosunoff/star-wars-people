import React, { useMemo } from "react";
import { Layout, Menu } from "antd";

import styles from "./app.module.less";
import { Router } from "./router";
import { Link } from "react-router-dom";
import { Path } from "./router/path-constant";
import { BreadcrumbSWAPI } from "../feature/breadcrum-SWAPI";
import { matchPath } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorPathName } from "./router/selectors-router";
import { routesConfig } from "./router/routes-config";

export const App: React.FC = () => {
  const pathname = useSelector(selectorPathName);

  const defaultSelectedKey = useMemo(() => {
    const config = routesConfig.find((config) => matchPath(pathname, config));

    return config ? (config.path as string) : "";
  }, [pathname]);

  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layout.Header className="header">
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
      </Layout.Header>

      <Layout.Content className={styles["main-layout"]}>
        <BreadcrumbSWAPI />

        <Layout.Content>
          <Router />
        </Layout.Content>
      </Layout.Content>

      <Layout.Footer style={{ textAlign: "center" }}>
        <a href="https://swapi.dev/" target="_blank" rel="noreferrer">
          SWAPI
        </a>
      </Layout.Footer>
    </Layout>
  );
};
