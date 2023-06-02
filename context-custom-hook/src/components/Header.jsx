import React from "react";
import "../styles/header.css";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useTheme();
  function changeHandler(e) {
    e.preventDefault();
    setTheme(e.target.value);
  }
  return (
    <div className="header-container">
      <p>Header</p>
      <select name="theme" onChange={changeHandler} defaultValue={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}
