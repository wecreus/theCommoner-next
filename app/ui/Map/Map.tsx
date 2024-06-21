'use client';

// import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import Globe from "./Globe";
import { Environment } from "@react-three/drei";
import GlobeData from "@/public/data/countries.json";
import Camera from "./Camera";

import "./Map.scss";

// TODO: Environment adds about 2 seconds to load time, find ways to optimise
// add point to Mariupol
// remove magnifying glass on mobile safari 
const Map = () => {
  
  /* eslint-disable react/no-unknown-property  */
  return (
    <div className="card__content card__map">
      <Canvas shadows camera={{ fov: 50, position: [55.12, 87.91, 95.46] }} gl={{antialias: true}}>
        <Globe />
        <Environment preset={"dawn"} />
        <Camera />
      </Canvas>
    </div>
    /* eslint-enable react/no-unknown-property  */
  );
};

export default Map;
