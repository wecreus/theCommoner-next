'use client';

import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import { memo } from "react";
import "./Map.scss";

// TODO:
// add point to Mariupol
// remove magnifying glass on mobile safari 
const Map = memo(() => {

  return (
    <div className="card__content card__map">
      <Canvas shadows camera={{ fov: 50, position: [55.12, 87.91, 95.46] }} gl={{antialias: true}}>
        <Globe />
        <Environment files={'/shapes/kiara.hdr'}/>
        <Camera />
      </Canvas>
    </div>
  );
});

Map.displayName = "Map";

export default Map;
