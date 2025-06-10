// src/TextDistort.jsx
import { Text } from "@react-three/drei";

export default function TextDistort() {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
    >
      Hover Me
    </Text>
  );
}
