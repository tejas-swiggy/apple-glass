import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function Cursor() {
    const meshRef = useRef();
    const { viewport } = useThree();
    const [target, setTarget] = useState({ x: 0, y: 0 });
    const scaleRef = useRef(1);

    useFrame(() => {
        if (!meshRef.current) return;

        gsap.to(meshRef.current.position, {
            x: target.x,
            y: target.y,
            duration: 0.17,
            ease: "power2.out",
        });

        meshRef.current.scale.setScalar(scaleRef.current);
    });

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        setTarget({
            x: x * viewport.width / 2,
            y: y * viewport.height / 2,
        });
    };

    const handleMouseEnter = () => {
        scaleRef.current = 2;
    };
    const handleMouseLeave = () => {
        scaleRef.current = 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.getElementById("text")?.addEventListener("mouseenter", handleMouseEnter);
    document.getElementById("text")?.addEventListener("mouseleave", handleMouseLeave);

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <MeshTransmissionMaterial
                thickness={0.3}
                roughness={0}
                transmission={1}
                ior={1.2}
                chromaticAberration={0.06}
                anisotropy={0.1}
                distortion={0.2}
                distortionScale={0.3}
                temporalDistortion={0.2}
            />
        </mesh>

    );
}
