import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/ThemeContext.js";
import './ThemeBtn.css'

function ThemeButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onClick = () => {
        if (darkMode) {
            theme.dispatch({ type: "LIGHTMODE" });
            localStorage.setItem('theme', true)
        }
        else {
            theme.dispatch({ type: "DARKMODE" });
            localStorage.setItem('theme', false)
        }
    };

    return (
        <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    )
}

export default ThemeButton;