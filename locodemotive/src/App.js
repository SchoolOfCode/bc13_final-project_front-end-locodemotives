import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.js";
import Learn from "./pages/Learn/Learn.js";
import Discuss from "./pages/Discuss/Discuss.js";
import Settings from "./pages/Settings/Settings.js";
import Login from "./pages/Login/Login.js";
import NewResponsePage from "./pages/NewResponsePage";
import NewPostPage from "./pages/NewPostPage/NewPostPage";
import NewResourcePage from "./pages/NewResourcePage";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import { ThemeContext } from "./hooks/ThemeContext";

function App() {
  const navigate = useNavigate(); // gets the current location in site

  const theme = useContext(ThemeContext); // setting context provider for dark mode
  const darkMode = theme.state.darkMode; // current state of dark mode context

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  async function getUserStatus(foundUser) {
    let response = await fetch(
      `${process.env.REACT_APP_URL}/user/?id=${foundUser}`
    );
    let data = await response.json();
    // checks user id from local storage compares it to user data in backend
    if (foundUser === data.payload.user_id) {
      login(); // automatically login if all data matches
      setUser(data.payload);
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const foundUser = JSON.parse(loggedInUser);
    getUserStatus(foundUser);
  }, []); // get user id from local storage

  async function getUserTheme(foundTheme) {
    if (foundTheme === true) {
      theme.dispatch({ type: "LIGHTMODE " }); // action sent to useReducer to turn the state to false (see ThemeContext.js)
    } else if (foundTheme === false) {
      theme.dispatch({ type: "DARKMODE" }); // action sent to useReducer to turn the state to true (see ThemeContext.js)
    }
  }

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const foundTheme = JSON.parse(userTheme);
    getUserTheme(foundTheme);
  }, []); // get theme from local storage

  async function getUser(email, password) {
    let userFetch = await fetch(
      `${process.env.REACT_APP_URL}/user/?email=${email}`
    );
    let userData = await userFetch.json();
    if (
      email === userData?.payload?.email &&
      userData.payload.email.length > 0
    ) {
      if (
        password === userData.payload.password &&
        userData.payload.password.length > 0
      ) {
        login();
        setUser(userData.payload);
        localStorage.setItem("user", userData.payload.user_id);
      } else {
        setUser({});
        return "Incorrect Password!";
      }
    } else {
      setUser({});
      return "Incorrect Email!";
    }
  } // login system that checks the email and password are correct

  const login = () => {
    setIsAuthenticated(true);
    navigate("/home");
  }; // sends user to home page once logged in

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  }; // sends user to login page when logged out

  return (
    <div className={`App ${darkMode ? "app-dark" : "app-light"}`}>
      <Navbar
        isAuthenticated={isAuthenticated}
        logout={logout}
        userData={user}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={<Login login={getUser} logout={logout} />}
        />
        <Route
          path="/home"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Home userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/learn"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Learn userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/discuss"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Discuss />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Settings userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/new_response"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<NewResponsePage userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/new_post"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<NewPostPage userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/new_resource"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<NewResourcePage userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
