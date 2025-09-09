import React, { createContext, useContext } from "react";
import rawData from "data.json";

const db = rawData as Record<string, any>;

export const ColorContext = createContext({
  mainColor: "#f78828",
  subColor: "#ccc",
  splashColor: "#000",
  bgColor: "#fff",
  fontColor: "#000"

});

export const ColorProvider: React.FC<{ id:string, children: React.ReactNode }> = ({ id, children }) => {
  const mainColor = db[id]?.mainColor || "#f78828";
  const subColor = db[id]?.subColor || "#ccc";
  const splashColor = db[id]?.splashColor || mainColor;
  const bgColor = db[id]?.bgColor || "#fff";
  const fontColor = db[id]?.fontColor || "#000";

  return (
    <ColorContext.Provider value={{ mainColor, subColor, splashColor, bgColor, fontColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);