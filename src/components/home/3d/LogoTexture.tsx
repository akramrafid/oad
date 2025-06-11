
import { useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

type LogoTextureProps = {
  texturePath: string;
  fallbackColor: string;
  meshProps?: {
    position?: [number, number, number];
    rotation?: [number, number, number];
  };
  geometryProps: {
    type: 'box' | 'circle';
    args: number[];
  };
  timeOffset?: number;
  radius?: number;
};

export const LogoTexture = ({ 
  texturePath, 
  fallbackColor, 
  meshProps = {}, 
  geometryProps,
  timeOffset = 0,
  radius = 0 
}: LogoTextureProps) => {
  const [textureError, setTextureError] = useState(false);
  const meshRef = useRef<Mesh>(null);
  
  // Load texture with proper error handling
  let texture;
  try {
    texture = useTexture(texturePath);
    console.log("Texture loaded successfully:", texturePath);
  } catch (error) {
    console.error("Failed to load texture:", texturePath, error);
    setTextureError(true);
  }
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current && radius > 0) {
      // Orbit around center
      meshRef.current.position.x = Math.sin(time * 0.3 + timeOffset) * radius;
      meshRef.current.position.z = Math.cos(time * 0.3 + timeOffset) * radius;
      // Self rotation
      meshRef.current.rotation.y = time / (3 - timeOffset * 0.5);
    }
  });

  if (textureError || !texture) {
    return (
      <mesh ref={meshRef} {...meshProps}>
        {geometryProps.type === 'circle' ? (
          <circleGeometry args={[
            geometryProps.args[0] || 1, 
            geometryProps.args[1] || 32
          ]} />
        ) : (
          <boxGeometry args={[
            geometryProps.args[0] || 1, 
            geometryProps.args[1] || 1, 
            geometryProps.args[2] || 0.2,
            geometryProps.args[3] || 1,
            geometryProps.args[4] || 1,
            geometryProps.args[5] || 1
          ]} />
        )}
        <meshStandardMaterial args={[{
          color: fallbackColor,
          emissive: fallbackColor,
          emissiveIntensity: 0.3,
          metalness: 0.8,
          roughness: 0.2
        }]} />
      </mesh>
    );
  }

  return (
    <mesh ref={meshRef} {...meshProps}>
      {geometryProps.type === 'circle' ? (
        <circleGeometry args={[
          geometryProps.args[0] || 1, 
          geometryProps.args[1] || 32
        ]} />
      ) : (
        <boxGeometry args={[
          geometryProps.args[0] || 1, 
          geometryProps.args[1] || 1, 
          geometryProps.args[2] || 0.2,
          geometryProps.args[3] || 1,
          geometryProps.args[4] || 1,
          geometryProps.args[5] || 1
        ]} />
      )}
      <meshStandardMaterial args={[{
        map: texture,
        emissiveMap: texture,
        emissiveIntensity: 0.3,
        metalness: 0.8,
        roughness: 0.2
      }]} />
    </mesh>
  );
};
