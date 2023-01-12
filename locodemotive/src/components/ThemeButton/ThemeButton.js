import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../hooks/ThemeContext.js";
import './ThemeBtn.css'

function ThemeButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    async function getUserTheme(foundTheme) {
        if (foundTheme === true) {
          theme.dispatch({ type: 'LIGHTMODE '})
        } else if (foundTheme === false) {
          theme.dispatch({ type: 'DARKMODE' })
        }
      }

    useEffect(() => {
        const userTheme = localStorage.getItem('theme');
        const foundTheme = JSON.parse(userTheme)
        getUserTheme(foundTheme);
    },[])

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