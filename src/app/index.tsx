import React from "react";
import { Layout } from "antd";

import styles from "./app.module.less";
import { Router } from "./router";
import { BreadcrumbSWAPI } from "./components/breadcrum-SWAPI";
import { MainMenu } from "./components/main-menu";

export const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layout.Header className="header">
        <MainMenu />
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
