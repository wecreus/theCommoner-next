import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeSliceState {
  storedTheme: null | string;
}

const initialState: ThemeSliceState = {
  storedTheme: null
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<{ theme: string }>) => {
      state.storedTheme = action.payload.theme;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
