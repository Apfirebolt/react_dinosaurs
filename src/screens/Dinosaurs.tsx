import React, { useEffect } from "react";
import { List, Card } from "antd";
import { useSetAtom, useAtom } from "jotai";
import axios from "axios";
import { dinosaursAtom } from "../atoms";
import Loader from "../components/Loader";
import type { Dinosaur } from "../atoms";

const Dinosaurs: React.FC = () => {
  const setDinosaurs = useSetAtom(dinosaursAtom);
  const [isLoading, setIsLoading] = React.useState(true);
  const [dinosaurs] = useAtom(dinosaursAtom); // Use useAtom to read the atom

  useEffect(() => {
    const fetchDinosaurs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Dinosaur[]>(
          "https://dinosaur-facts-api.shultzlab.com/dinosaurs"
        );
        setDinosaurs(response.data);
      } catch (error) {
        console.error("Error fetching dinosaurs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDinosaurs();
  }, [setDinosaurs]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ textAlign: "center" }}>Dinosaurs</h1>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        dataSource={dinosaurs}
        renderItem={(dinosaur) => (
          <List.Item key={dinosaur.Name}>
            <Card title={dinosaur.Name}>
              <p>Description: {dinosaur.Description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dinosaurs;
