import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import styles from "./app.module.less";
import { Router } from "./router";

export const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", maxHeight: "100vh" }}>
      <Layout.Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>

      <Layout.Content className={styles["main-layout"]}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Layout>
          <Layout.Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu
                key="sub2"
                icon={<LaptopOutlined />}
                title="subnav 2"
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </Menu.SubMenu>

              <Menu.SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>

          <Layout.Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Router />
          </Layout.Content>
        </Layout>
      </Layout.Content>

      <Layout.Footer style={{ textAlign: "center" }}>
        <a href="https://swapi.dev/" target="_blank" rel="noreferrer">
          SWAPI
        </a>
      </Layout.Footer>
    </Layout>
  );
};
