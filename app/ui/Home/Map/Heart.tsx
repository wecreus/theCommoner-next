import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { a, useSpring, config } from "@react-spring/three";
import { Outlines } from "@react-three/drei";
import type { Object3D, Mesh } from "three";

type GLTFResult = {
  nodes: {
    Cube002_Cube024: Mesh;
  };
};

const Heart = ({ handleClick }: { handleClick: () => void }) => {
  const { nodes } = useGLTF("/shapes/heart.glb") as unknown as GLTFResult;
  const heartRef = useRef<Object3D>(null);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!active && heartRef.current) {
      heartRef.current.rotation.y += 0.005;
    }
  });

  const { scale, rotation } = useSpring({
    scale: active ? 4 : 2.5,
    rotation: [0, active ? -0.85 : 0, active ? 0.6 : 0],
    config: config.gentle,
  });

  useEffect(() => {
    document.body.style.cursor = active ? "pointer" : "auto";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [active]);

  return (
    <>
      <mesh
        receiveShadow
        castShadow
        position={[28.8, 52.5, 59.5]}
        rotation={[Math.PI / 1.5, Math.PI * 0.92, 0]}
        scale={4}
      >
        <planeGeometry />
        <shadowMaterial attach="material" opacity={0.15} />
      </mesh>
      <directionalLight
        castShadow
        position={[40, 55, 75.5]}
        intensity={0.1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        target-position={[28.8, 52.5, 60.5]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* @ts-ignore who knows why spring/fiber doesn't include r3f extended nodes */}
      <a.mesh
        ref={heartRef}
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Cube024.geometry}
        position={[28.8, 53.15, 59.5]}
        scale={scale}
        rotation={rotation}
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
        onClick={handleClick}
      >
        <Outlines
          thickness={active ? 0.02 : 0}
          color="white"
          opacity={0.2}
          transparent
        />
        <meshStandardMaterial metalness={0.2} roughness={0.1} color={"red"} />
        {/* @ts-ignore */}
      </a.mesh>
    </>
  );
};

export default Heart;
