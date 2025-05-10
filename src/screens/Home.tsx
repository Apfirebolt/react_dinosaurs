import React, { useEffect } from "react";
import { Button } from "antd";
import { useSetAtom, useAtom } from "jotai";
import axios from "axios";
import { randomDinosaur } from "../atoms";
import { Layout, Typography, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const setRandomDinosaur = useSetAtom(randomDinosaur);
  const [isLoading, setIsLoading] = React.useState(true);
  const dinosaur = useAtom(randomDinosaur);

  const getRandomDinosaur = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://dinosaur-facts-api.shultzlab.com/dinosaurs/random"
      );
      setRandomDinosaur(response.data);
    } catch (error) {
      console.error("Error fetching random dinosaur:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomDinosaur();
  }, []);

  return (
    <Layout>
      <Content style={{ padding: "50px", marginTop: 64 }}>
        <div
          className="site-layout-content"
          style={{ background: "#fff", padding: 24, minHeight: 380 }}
        >
          <Title level={2}>Welcome to DinoWorld</Title>

          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card>
                <Title level={4} id="dinosaur-title">
                  {dinosaur[0]?.Name || "Name not available"}
                </Title>
                <Paragraph id="dinosaur-description">
                  {dinosaur[0]?.Description || "Description not available"}
                </Paragraph>
                <Button
                  onClick={() => {
                    getRandomDinosaur();
                  }}
                >
                  Show Random Dinosaur
                </Button>
                {isLoading && (
                  <Paragraph style={{ color: "blue", fontStyle: "italic", marginTop: "10px" }}>
                  Loading...
                  </Paragraph>
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
