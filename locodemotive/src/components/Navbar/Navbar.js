import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from 'react'
import "./Navbar.css";
import Logo from "./Logo.png";
import Bell from "./Bell.svg";
import NotificationTab from '../NotificationTab/NotificationTab';
// import ProfilePlaceholder from "./ProfilePlaceholder.png";

export default function Navbar({ isAuthenticated, logout, userData }) {

  const [isOpen, setIsOpen] = useState(false)

  function handleNotifications() {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <nav className="nav">
      <Link to="/home" className="site-title">
        <img src={Logo} alt="Locodemotive Logo"></img>
      </Link>
      <ul>
        {isAuthenticated ? <li><button onClick={logout}>Log-out</button></li> : <></>}
        {isAuthenticated ? <CustomLink to="/home">Home</CustomLink> : <></>}
        {isAuthenticated ? <CustomLink to="/learn">Learn</CustomLink> : <></>}
        {isAuthenticated ? (
          <CustomLink to="/discuss">Discuss</CustomLink>
        ) : (
          <></>
        )}
        {isAuthenticated ? (
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
            <span>
              <img id="pfp" src={userData.image_url} alt="ProfileImage"></img>
            </span>
          </CustomLink>
        ) : (
          <></>
        )}
      </ul>
    </nav>
    {isOpen && <NotificationTab/>}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
