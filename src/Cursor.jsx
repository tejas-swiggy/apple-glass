import { useThree, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export default function Cursor({ isHovering }) {
  const meshRef = useRef();
  const { viewport } = useThree();
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (!meshRef.current) return;

    // Track cursor
    gsap.to(meshRef.current.position, {
      x: target.x,
      y: target.y,
      duration: 0.17,
      ease: "power2.out",
    });
  });

  useEffect(() => {
    // Convert pixel coordinates to Three coordinates
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setTarget({
        x: x * viewport.width / 2,
        y: y * viewport.height / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [viewport]);

  useEffect(() => {
    // Scale on hover
    if (!meshRef.current) return;
    gsap.to(meshRef.current.scale, {
      x: isHovering ? 2.5 : 1,
      y: isHovering ? 2.5 : 1,
      z: isHovering ? 2.5 : 1,
      duration: 0.13,
      ease: "cubic-bezier(.8,-0.84,.16,1.68)",
    });
  }, [isHovering]);



  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.08, 32, 32]} />
      <MeshTransmissionMaterial
        thickness={0.1}
        roughness={0.03}
        transmission={1}
        ior={1.3}
        chromaticAberration={0.01}
        anisotropy={0.1}
        distortion={0.2}
        distortionScale={0.2}
        temporalDistortion={0.2}
      />
    </mesh>
  );
}
