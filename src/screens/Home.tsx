import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <Layout>

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
    </Layout>
  );
};

export default Home;
