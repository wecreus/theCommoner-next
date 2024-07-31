'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import Globe from "./Globe";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import { memo } from "react";
import "./Map.scss";

const DisableRender = () => useFrame(() => null, 1000)

const MapSection = memo(({ isVisible }: { isVisible: boolean }) => {
  
  return (
    <div className="card__content card__map">
      <Canvas shadows camera={{ fov: 50, position: [55.12, 87.91, 95.46] }} gl={{antialias: true}}>
        {!isVisible && <DisableRender />}
        <Globe />
        <Environment files={'/shapes/kiara.hdr'}/>
        <Camera />
      </Canvas>
    </div>
  );
});

MapSection.displayName = "MapSection";

export default MapSection;
