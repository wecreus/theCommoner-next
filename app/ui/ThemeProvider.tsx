"use client";

import { memo, useEffect, useState } from "react";
import { updateTheme } from "@/lib/store/theme/themeSlice";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";

const ThemeProvider = memo(({ children }: { children: React.ReactNode }) => {
  const storeTheme = useAppSelector((store) => store.theme.storedTheme);
  const [currentTheme, setCurrentTheme] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    // if it exists in localStorage

    if (localTheme !== null) {
      dispatch(
        updateTheme({
          theme: JSON.parse(localTheme),
        })
      );
    } else {
      localStorage.setItem("theme", "0");
      dispatch(
        updateTheme({
          theme: 0,
        })
      );
    }
  }, [dispatch]);
  
  // when redux value changes update state
  useEffect(() => {
    setCurrentTheme(storeTheme || 0);
    localStorage.setItem("theme", String(storeTheme || 0));
  }, [storeTheme]);

  return <main className={`theme${currentTheme + 1}`}>{children}</main>;
});

ThemeProvider.displayName = "ThemeProvider";

export default ThemeProvider;
