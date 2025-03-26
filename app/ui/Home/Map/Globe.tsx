import { useRef, useLayoutEffect, useMemo } from "react";
import { extend, useThree } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";
import type { FeaturesEntityType } from "@/lib/definitions";
import ThreeGlobe from "three-globe";
import GlobeData from "@/public/data/countries.json";
import createCountryMaterial from "@/lib/utils/createCountryMaterial";
import Heart from "./Heart";
import PopupHTML from "./PopupHTML";
import type { CameraControls } from "@react-three/drei";

extend({ ThreeGlobe });

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: {
      ref?: React.RefObject<ThreeGlobe | null>;
      args?: any[];
    };
  }
}

// TODO: add clouds from drei
const Globe = () => {
  const globeRef = useRef<ThreeGlobe | null>(null);
  // forcing camera to be of type CameraControls no matter what
  const controls = useThree((state) => state.controls) as unknown as CameraControls;

  const pointCameraToUkraine = () => {
    controls.setPosition(46.98, 74.09, 80.15, true);
  };

  // React or R3F will think that args change even if they do not and rerender ThreeGlobe
  // godda do it this way
  const globeArgs = useMemo(() => [{ animateIn: false }], []);

  useLayoutEffect(() => {
    if (!globeRef.current) {
      return;
    }
    const globeMaterial = new MeshStandardMaterial({
      metalness: 1,
      roughness: 0.8,
      color: "#e4dfff",
    });

    // common
    globeRef.current
      .globeMaterial(globeMaterial)
      .polygonsData(GlobeData.features)
      .atmosphereAltitude(0.05);

    globeRef.current.position.y = -25;

    // polygons
    globeRef.current
      .polygonCapMaterial(createCountryMaterial)
      .polygonsTransitionDuration(200)
      .polygonSideColor((d: FeaturesEntityType) => {
        return d.properties?.ADMIN === "Ukraine" ? "#00000055" : "#00000000";
      })
      .polygonStrokeColor((d: FeaturesEntityType) => {
        return d.properties?.ADMIN === "Ukraine" ? "#2b2b2b" : "#575757ff";
      })
      .polygonAltitude((d: FeaturesEntityType) =>
        d.properties?.ADMIN === "Ukraine" ? 0.015 : 0.008
      );
  }, []);

  return (
    <>
      <Heart handleClick={pointCameraToUkraine} />
      <PopupHTML handleClick={pointCameraToUkraine}/>
      <threeGlobe args={globeArgs} ref={globeRef} />
    </>
  );
};

export default Globe;
