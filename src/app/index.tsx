import React from "react";
import { Layout } from "antd";
import { Router } from "./router";

export const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layout>
        <Layout.Content>
          <Router />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
