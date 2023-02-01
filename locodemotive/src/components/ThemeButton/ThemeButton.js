import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext.js";
import "./ThemeButton.css";
import Moon from "../Images/Moon.svg";
import Sun from "../Images/Sun.svg";

// component for the theme button on the navbar to change the theme (light to dark)

export default function ThemeButton() {
  // import context containing current theme
  const theme = useContext(ThemeContext);
  // see if darkMode is true/false currently
  const darkMode = theme.state.darkMode;

  // when button clicked ...
  const onClick = () => {
    // if currently darkmode switch to light mode
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
      // set the local storge to match this so that theme is preserved when page refreshed
      localStorage.setItem("theme", true);
    } else {
      // switch to darkmode
      theme.dispatch({ type: "DARKMODE" });
      localStorage.setItem("theme", false);
    }
  };

  return (
    // conditional rendering as button look depends on current theme

    <button
      className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
      onClick={onClick}
    >
      <img src={darkMode ? Sun : Moon} alt="theme"></img>
    </button>
  );
}
