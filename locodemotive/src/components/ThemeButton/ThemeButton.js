import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext.js";
import "./ThemeButton.css";
import Moon from "../Images/Moon.svg";
import Sun from "../Images/Sun.svg";

function ThemeButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
      localStorage.setItem("theme", true);
    } else {
      theme.dispatch({ type: "DARKMODE" });
      localStorage.setItem("theme", false);
    }
  };

  return (
    <button
      className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
      onClick={onClick}
    >
      <img src={darkMode ? Sun : Moon} alt="theme"></img>
    </button>
  );
}

export default ThemeButton;
