import { Text } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import Inter from "./assets/Inter.ttf";
import * as THREE from "three";

// Damping for magnetic interaction
const damping = 0.1;

export default function TextDistort({ setHoveringText }) {
    const textRef = useRef();
    const { viewport, size } = useThree();
    const [isHovered, setIsHovered] = useState(false);
    const currentOffset = useRef(new THREE.Vector3(0, 0, 0));
    const mouse = useRef({ x: 0, y: 0 });

    // Convert pixel coordinates to Three
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / size.width) * 2 - 1;
            const y = -(e.clientY / size.height) * 2 + 1;
            mouse.current.x = x * (viewport.width / 2);
            mouse.current.y = y * (viewport.height / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [size, viewport]);

    useFrame(() => {
        if (!textRef.current) return;

        const mesh = textRef.current;
        const offsetX = mouse.current.x * damping;
        const offsetY = mouse.current.y * damping;

        if (isHovered) {
            // Smoothly approach the offset from original position
            currentOffset.current.x += (offsetX - currentOffset.current.x) * 0.1;
            currentOffset.current.y += (offsetY - currentOffset.current.y) * 0.1;
        } else {
            // Smoothly return to original position
            currentOffset.current.x += (0 - currentOffset.current.x) * 0.1;
            currentOffset.current.y += (0 - currentOffset.current.y) * 0.1;
        }

        mesh.position.x = currentOffset.current.x;
        mesh.position.y = currentOffset.current.y;
    });

    return (
        <Text
            ref={textRef}
            position={[0, 0, 0]}
            anchorX="center"
            anchorY="middle"

            // Font
            font={Inter}
            fontSize={0.5}
            letterSpacing={-0.07}
            color="#ffffff"
            sdfGlyphSize={512}

            // Detect hover
            onPointerOver={(e) => {
                e.stopPropagation();
                setIsHovered(true);
                setHoveringText(true);
            }}
            onPointerOut={(e) => {
                e.stopPropagation();
                setIsHovered(false);
                setHoveringText(false);
            }}
        >
            Liquid Glass
        </Text>
    );
}
