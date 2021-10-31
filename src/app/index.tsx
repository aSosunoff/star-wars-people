import React from "react";
import { Layout, Menu } from "antd";

import styles from "./app.module.less";
import { Router } from "./router";
import { Link } from "react-router-dom";
import { Path } from "./router/path-constant";
import { BreadcrumbSWAPI } from "../feature/breadcrum-SWAPI";

export const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layout.Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to={Path.People}>People</Link>
          </Menu.Item>
          <Menu.Item key="2">
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
