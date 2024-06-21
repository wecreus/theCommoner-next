import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./theme/themeSlice";
import globeReducer from "./globe/globeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      globe: globeReducer
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
