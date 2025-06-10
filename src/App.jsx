import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useState } from "react";

// Components
import Cursor from "./Cursor";
import TextDistort from "./TextDistort";


export default function App() {
    const [hoveringText, setHoveringText] = useState(false);

    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>

            {/* Lighting */}
            <Environment preset="city" />

            {/* Scene */}
            <Cursor isHovering={hoveringText} />
            <TextDistort setHoveringText={setHoveringText} />
        </Canvas>
    );
}
