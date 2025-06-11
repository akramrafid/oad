
export const OrbitPaths = () => {
  const pathsData = [
    { radius: 3.5, opacity: 0.2 },
    { radius: 5, opacity: 0.15 },
    { radius: 6.5, opacity: 0.12 },
    { radius: 8, opacity: 0.1 },
    { radius: 9.5, opacity: 0.08 },
    { radius: 11, opacity: 0.06 },
  ];
  
  return (
    <>
      {pathsData.map((path, index) => (
        <mesh key={index} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <torusGeometry args={[path.radius, 0.02, 16, 100]} />
          <meshBasicMaterial args={[{ transparent: true, opacity: path.opacity, color: "#ffffff" }]} />
        </mesh>
      ))}
    </>
  );
};
