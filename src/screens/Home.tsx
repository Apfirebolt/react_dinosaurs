import React from "react";
import { Layout, Menu, Typography, Row, Col, Card } from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div
          className="logo"
          style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
        >
          DinoWorld
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "50px", marginTop: 64 }}>
        <div
          className="site-layout-content"
          style={{ background: "#fff", padding: 24, minHeight: 380 }}
        >
          <Title level={2}>Welcome to DinoWorld</Title>
          <Paragraph>
            Explore the fascinating world of dinosaurs! Learn about their
            history, species, and much more.
          </Paragraph>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card title="Tyrannosaurus Rex" bordered={false}>
                The king of the dinosaurs, known for its massive size and sharp
                teeth.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Triceratops" bordered={false}>
                A herbivorous dinosaur with three distinctive horns on its face.
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Velociraptor" bordered={false}>
                A small but fast and intelligent predator.
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        DinoWorld ©2023 Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default Home;
