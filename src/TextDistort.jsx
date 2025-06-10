// src/TextDistort.jsx
import { Text } from "@react-three/drei";
import Inter from "./assets/Inter.ttf";

export default function TextDistort() {

    return (
        <Text
            position={[0, 0, 0]}
            font={Inter}
            fontSize={0.5}
            letterSpacing={-0.07} // -2% spacing
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            sdfGlyphSize={512} // Higher for better detail, lower for performanceß
        >
            Liquid Glass
        </Text>
    );
}
