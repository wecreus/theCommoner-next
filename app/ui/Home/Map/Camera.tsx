import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { CameraControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAppDispatch } from "@/lib/store/hooks";
import { updateIsInRange } from "@/lib/store/globe/globeSlice";
import {
  CAMERA_INITIAL_POSITION,
  CAMERA_AFTER_INTERVAL_POSITION,
} from "@/lib/utils/enums/globe";

// TODO: rotate camera to interesting point when idle
const Camera = () => {
  const dispatch = useAppDispatch();
  const cameraControlsRef = useRef<CameraControls>(null!);
  const [isInRange, setIsInRange] = useState(false);

  useFrame(({ camera }) => {
    setIsInRange(
      camera.rotation.z > 0.2 &&
        camera.rotation.z < 0.6 &&
        cameraControlsRef.current.distance < 150 &&
        cameraControlsRef.current.distance > 105
    );
  });

  useEffect(() => {
    dispatch(
      updateIsInRange({
        isInRange: isInRange,
      })
    );
  }, [isInRange, dispatch]);

  useLayoutEffect(() => {
    cameraControlsRef.current?.setLookAt(
      CAMERA_INITIAL_POSITION.X,
      CAMERA_INITIAL_POSITION.Y,
      CAMERA_INITIAL_POSITION.Z,
      CAMERA_INITIAL_POSITION.TARGET_X,
      CAMERA_INITIAL_POSITION.TARGET_Y,
      CAMERA_INITIAL_POSITION.TARGET_Z
    );

    const myTimeout = setTimeout(() => {
      cameraControlsRef.current?.setLookAt(
        CAMERA_AFTER_INTERVAL_POSITION.X,
        CAMERA_AFTER_INTERVAL_POSITION.Y,
        CAMERA_AFTER_INTERVAL_POSITION.Z,
        CAMERA_AFTER_INTERVAL_POSITION.TARGET_X,
        CAMERA_AFTER_INTERVAL_POSITION.TARGET_Y,
        CAMERA_AFTER_INTERVAL_POSITION.TARGET_Z,
        true
      );
    }, 500);
    return () => clearTimeout(myTimeout);
  }, []);

  return (
    <CameraControls
      ref={cameraControlsRef}
      azimuthRotateSpeed={0.5}
      minDistance={95}
      maxDistance={210}
      maxPolarAngle={Math.PI / 3.5}
      minPolarAngle={Math.PI / 3.5}
      dollySpeed={0.5}
      truckSpeed={0}
      makeDefault
    />
  );
};

export default Camera;
