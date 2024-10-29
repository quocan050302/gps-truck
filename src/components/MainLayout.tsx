import { ReactNode } from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;
const items = [
  { key: "1", icon: <UserOutlined />, label: <Link to="/">Home</Link> },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <Link to="/vehicle-road">Vehicle Road</Link>,
  },
];

const MainLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          paddingBlock: 15,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "0", overflow: "initial" }}>
          <div
            style={{
              // padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
