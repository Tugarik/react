import React from "react";
import "../styles/footer.css";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  function changeHandler(e) {
    e.preventDefault();
    setTheme(e.target.value);
  }
  return (
    <div className="footer-container">
      <p>Footer</p>
      <select name="theme" onChange={changeHandler} defaultValue={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}
