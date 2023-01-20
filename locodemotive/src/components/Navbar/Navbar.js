import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import Logo from "./Logo.png";
import Bell from "./Bell.svg";
import NotificationTab from "../NotificationTab/NotificationTab";
import ThemeButton from "../ThemeButton/ThemeButton";

// component for navbar on top of all pages
// pass in props to say if logged in (isAuthentictated), function for logging out (logout), and with a logged in user's info (userData)

export default function Navbar({ isAuthenticated, logout, userData }) {
  // state to say if notifications tab is open
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  // and function to control it
  function handleNotifications() {
    setIsNoteOpen(!isNoteOpen);
  }

  return (
    <>
      <nav className="nav">
        {/* logo has a link to the home page */}
        <Link to="/home" className="site-title">
          <img src={Logo} alt="Locodemotive Logo"></img>
        </Link>
        {/* buttons in navbar are arranged as an unordered list */}
        <ul>
          {/* logout button only shows if logged in using conditional rendering */}
          {isAuthenticated ? (
            <li>
              <button onClick={logout} className="logout-btn">
                Log-out
              </button>
            </li>
          ) : (
            <></>
          )}
          {/* links to each page only shown if logged in (= not on login page) */}
          {isAuthenticated ? <CustomLink to="/home">Home</CustomLink> : <></>}
          {isAuthenticated ? <CustomLink to="/learn">Learn</CustomLink> : <></>}
          {isAuthenticated ? (
            <CustomLink to="/discuss">Discuss</CustomLink>
          ) : (
            <></>
          )}
          {isAuthenticated ? (
            // the notifications button has an image on it
            // when it is clicked calls funtion to toggle state to see notification tab
            <li>
              <button id="bell" onClick={handleNotifications}>
                <img src={Bell} alt="Notification Bell"></img>
              </button>
            </li>
          ) : (
            <></>
          )}
          {isAuthenticated ? (
            <CustomLink to="/settings">
              {/* setting button shows the profile image instead of text - this is passed to CustomLink component as "children" */}
              <span>
                <img id="pfp" src={userData.image_url} alt="ProfileImage"></img>
              </span>
            </CustomLink>
          ) : (
            <></>
          )}
          {/* no conditional rendering as you can change the theme on any page - without needing to be logged in */}
          <li className="theme-container">
            <ThemeButton />
          </li>
        </ul>
      </nav>
      {/* conditional rendering used to only show the notifications tab when state is true. this is toggled by notification button being clicked*/}
      {isNoteOpen && <NotificationTab />}
    </>
  );
}

// link for each button on the nav bar
// each is a list item on the navbar (unordered list)
// to= the route of the page going to
// children = the html shown on the button
function CustomLink({ to, children, ...props }) {
  // work out path from current location and check it works
  // using methods from react router
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  // each button is actually a list item with a link inside
  // the text on it is the children
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
