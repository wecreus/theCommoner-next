"use client";

import { memo, useEffect, useState } from "react";
import { updateTheme } from "@/lib/features/theme/themeSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

// memo() ?
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storeTheme = useAppSelector((store) => store.theme.storedTheme);
  const [currentTheme, setCurrentTheme] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    // if it exists in localstorage
    if (localTheme !== null) {
      dispatch(
        updateTheme({
          theme: JSON.parse(localTheme),
        })
      );
    } 
  }, [dispatch]);

  // when redux value changes update state
  useEffect(() => {
    setCurrentTheme(storeTheme);
    localStorage.setItem("theme", String(storeTheme));
  }, [storeTheme]);

  return <main className={`theme${currentTheme + 1}`}>{children}</main>;
};

export default ThemeProvider;
