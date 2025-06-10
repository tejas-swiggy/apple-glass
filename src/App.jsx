import { Canvas } from "@react-three/fiber";
import Cursor from "./Cursor";
import TextDistort from "./TextDistort";
import { Environment } from "@react-three/drei";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={1} />
      <Environment preset="city" />
      <Cursor />
      <TextDistort />
    </Canvas>
  );
}

