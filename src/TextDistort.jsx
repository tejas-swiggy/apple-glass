// src/TextDistort.jsx
import { Text } from "@react-three/drei";
import Inter from "./assets/Inter.ttf";

export default function TextDistort({ textRef }) {
    return (
        <Text
            ref={textRef}
            position={[0, 0, 0]}
            font={Inter}
            fontSize={0.5}
            letterSpacing={-0.07}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            sdfGlyphSize={512}
        >
            Liquid Glass
        </Text>
    );
}
