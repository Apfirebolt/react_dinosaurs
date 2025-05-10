import React from "react";
import { List, Card } from "antd";

const dinosaurs = [
  { name: "Tyrannosaurus Rex", description: "Large carnivorous dinosaur." },
  {
    name: "Triceratops",
    description: "Herbivorous dinosaur with three horns.",
  },
  {
    name: "Velociraptor",
    description: "Small, fast, and intelligent predator.",
  },
  { name: "Brachiosaurus", description: "Tall herbivore with a long neck." },
];

const Dinosaurs: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={dinosaurs}
        renderItem={(dinosaur) => (
          <List.Item>
            <Card title={dinosaur.name}>{dinosaur.description}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Dinosaurs;
