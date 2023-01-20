import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext(); // defining context for dark mode

const initialState = { darkMode: false }; // set initial state with a bool

// useReducer that tracks the action and state of a switch case (dark mode)
const themeReducer = (state, action) => {
  // dispatch from app.js sent the action to change the state
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

// provides theme to entire app (see index.js)
export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
