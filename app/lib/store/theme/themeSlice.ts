import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeSliceState {
  /** Number indicating position in the array of themes (_variables.scss). **/
  storedTheme: number | null;
}

const initialState: ThemeSliceState = {
  storedTheme: null
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<{ theme: number }>) => {
      state.storedTheme = action.payload.theme;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
