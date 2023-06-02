import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/middle.css";

export default function Middle() {
  const { theme } = useTheme();
  const [styleClass, setStyleClass] = useState();
  console.log(theme);
  useEffect(() => {
    setStyleClass(`${theme} middle-container`);
    console.log("testing");
  }, [theme]);
  return (
    <div className={styleClass}>
      <p>Middle</p>
    </div>
  );
}
