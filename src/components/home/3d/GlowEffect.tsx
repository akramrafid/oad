
import * as THREE from 'three';

export const GlowEffect = () => {
  return (
    <mesh position={[0, 0, -15]}>
      <planeGeometry args={[40, 40]} />
      <meshBasicMaterial args={[{ transparent: true, opacity: 0.8, color: "#000000" }]} />
    </mesh>
  );
};
