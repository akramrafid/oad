
import { useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

type LogoBaseProps = {
  children: React.ReactNode;
  position: [number, number, number];
  timeOffset?: number;
  radius?: number;
};

export const LogoBase = ({ children, position, timeOffset = 0, radius = 0 }: LogoBaseProps) => {
  const meshRef = useRef<Mesh>(null);
  const [error, setError] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && !error) {
      // Orbit around center
      meshRef.current.position.x = Math.sin(time * 0.3 + timeOffset) * radius;
      meshRef.current.position.z = Math.cos(time * 0.3 + timeOffset) * radius;
      // Self rotation
      meshRef.current.rotation.y = time / (3 - timeOffset * 0.5);
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      {children}
    </mesh>
  );
};
