"use client";

import HalfCircle from "@/public/icons/halfCircle.svg";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { updateTheme } from "@/lib/store/theme/themeSlice";
import style from "@/styles/exports.module.scss";
import { memo } from "react";
import clsx from "clsx";

  
const getTotalThemes = (themes: React.CSSProperties): number => {
  const keys = Object.keys(themes);

  if(!keys[0]) {
    return 0;
  }

  return Number(keys[0].replace("totalThemes", ""));
}

const ThemeList = memo(() => {
  const dispatch = useAppDispatch();
  const storeTheme = useAppSelector((store) => store.theme.storedTheme);
  
  const updateStore = (theme: number) => {
    dispatch(
      updateTheme({
        theme: theme,
      })
    );
  };

  return (
    <div className="ThemeList-container">
      {Array(getTotalThemes(style))
        .fill(null)
        .map((el, i) => {
          return (
            <div
              className={clsx("ThemeList", {
                [`theme${i + 1}`]: true,
                "ThemeList--selected": i === storeTheme,
              })}
              key={"theme" + i}
              onClick={() => updateStore(i)}
            >
              <HalfCircle className="ThemeList__theme ThemeList__theme--primary" />
              <HalfCircle className="ThemeList__theme ThemeList__theme--secondary" />
            </div>
          );
        })}
    </div>
  );
});

ThemeList.displayName = "ThemeList";

export default ThemeList;
