import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home.js";
import Learn from "./pages/Learn.js";
import Discuss from "./pages/Discuss.js";
import Settings from "./pages/Settings.js";
import Login from "./pages/Login";
import CreateResponse from "./pages/CreateResponse";
import CreatePost from "./pages/CreatePost";
import CreateResource from "./pages/CreateResource";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import { ThemeContext } from "./hooks/ThemeContext";
// import env from 'react-dotenv';

function App() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  async function getUserStatus(foundUser) {
    let checkUser = await fetch(
      `${process.env.REACT_APP_URL}/user/?id=${foundUser}`
    );
    let checkUserData = await checkUser.json();
    if (foundUser === checkUserData.payload.user_id) {
      login();
      setUser(checkUserData.payload);
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const foundUser = JSON.parse(loggedInUser);
    getUserStatus(foundUser);
  }, []);

  async function getUserTheme(foundTheme) {
    if (foundTheme === true) {
      theme.dispatch({ type: "LIGHTMODE " });
    } else if (foundTheme === false) {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const foundTheme = JSON.parse(userTheme);
    getUserTheme(foundTheme);
  }, []);

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
  }

  const login = () => {
    setIsAuthenticated(true);
    navigate("/home");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

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
              component={<CreateResponse userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/new_post"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<CreatePost userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/new_resource"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<CreateResource userData={user} />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
