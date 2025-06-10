import { Canvas } from "@react-three/fiber";
import Cursor from "./Cursor";
import TextDistort from "./TextDistort";
import { Environment } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

export default function App() {
    const [hoveringText, setHoveringText] = useState(false);

    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <ambientLight intensity={1} />
            <Environment preset="city" />
            <Cursor isHovering={hoveringText} />
            <TextDistort setHoveringText={setHoveringText} />
        </Canvas>
    );
}
