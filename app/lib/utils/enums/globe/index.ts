/** Initial camera position on first rendered frame */
export enum CAMERA_INITIAL_POSITION {
  X = 42.56,
  Y = 487,
  Z = 601,
  TARGET_X = 0,
  TARGET_Y = 0,
  TARGET_Z = 0,
}

/** After 500ms camera should move to these coordinates */
export enum CAMERA_AFTER_INTERVAL_POSITION {
  X = 63.61,
  Y = 87.90,
  Z = 90.02,
  TARGET_X = 0,
  TARGET_Y = 0,
  TARGET_Z = 0,
}

/** HTML top left popup position */
export enum HTML_POPUP {
  POSITION_X = 34.5,
  POSITION_Y = 54,
  POSITION_Z = 56,
  LABEL = "Currently based in ",
  CITY = "Kyiv",
}

/** Heart uses an extra plane object that receives its shadow  */
export enum HEART_SHADOW_PLANE {
  X = 34,
  Y = 53.5,
  Z = 55.5,
  ROTATION_X = Math.PI / 1.7,
  ROTATION_Y = Math.PI * 0.9,
  ROTATION_Z = 0,
}

/** Heart position  */
export enum HEART_POSITION {
  X = 33.5,
  Y = 54.15,
  Z = 56.5,
}

/** Heart Shadow Light Position */
export enum HEART_LIGHT_POSITION {
  X = 50,
  Y = 55,
  Z = 63.5,
}