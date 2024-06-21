import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobeSliceState {
  /** When user pans the camera in range of Ukraine **/
  isInRange: boolean,
}

const initialState: GlobeSliceState = {
  isInRange: false
};

const globeSlice = createSlice({
  name: "globe",
  initialState,
  reducers: {
    updateIsInRange: (state, action: PayloadAction<GlobeSliceState>) => {
      state.isInRange = action.payload.isInRange;
    },
  },
});

export const { updateIsInRange } = globeSlice.actions;

export default globeSlice.reducer;
