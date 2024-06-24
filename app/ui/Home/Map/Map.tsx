'use client';

import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";
import { Environment } from "@react-three/drei";
import Camera from "./Camera";
import "./Map.scss";

// TODO: Environment adds about 2 seconds to load time, find ways to optimize
// add point to Mariupol
// remove magnifying glass on mobile safari 
const Map = () => {
  
  return (
    <div className="card__content card__map">
      <Canvas shadows camera={{ fov: 50, position: [55.12, 87.91, 95.46] }} gl={{antialias: true}}>
        <Globe />
        <Environment preset={"dawn"} />
        <Camera />
      </Canvas>
    </div>
  );
};

export default Map;
