import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ContactsFilled,
  PhoneFilled,
  InfoCircleFilled,
  HomeFilled
} from "@ant-design/icons";
import { Badge } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import StudyTable from "../src/components/studyTable";
import CytelLogo from "../src/Asserts/images/download.png";
import { useDispatch } from "react-redux";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {/* <div className="logo" /> */}
          <img className="logo" src={CytelLogo} alt="Logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <HomeFilled />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <InfoCircleFilled />
              <span>About</span>
            </Menu.Item>
            <Menu.Item key="3">
              <PhoneFilled />
              <span>Contact</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280
            }}
          >
            <StudyTable></StudyTable>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

//ReactDOM.render(<SiderDemo />, document.getElementById('container'));

export default App;
