import "./Login.css";
import Logo from "./Content/Logo.png";
import { useState } from "react";

export default function Login({ login }) {
  const teams = [
    "DevOps",
    "Support Services",
    "Digital Development",
    "Business Analysis",
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    image_url: "",
    team: "DevOps",
  });

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="content">
      <div className="login-container">
        <div className="logo-container">
          <img src={Logo} alt="Locodemotive Icon"></img>
        </div>
        {newUser ? (
          <div className="new-user-form-container">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setNewUserData({ ...newUserData, name: e.target.value });
              }}
            ></input>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setNewUserData({ ...newUserData, email: e.target.value });
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setNewUserData({ ...newUserData, password: e.target.value });
              }}
            ></input>
            <input
              type="text"
              placeholder="Profile image URL"
              onChange={(e) => {
                setNewUserData({ ...newUserData, image_url: e.target.value });
              }}
            ></input>
            <select
              name="Team"
              onChange={(e) => {
                setNewUserData({ ...newUserData, team: e.target.value });
              }}
            >
              {teams.map((team, index) => {
                return (
                  <option value={team} key={index}>
                    {team}
                  </option>
                );
              })}
            </select>
            <p
              onClick={() => {
                setNewUser(false);
              }}
            >
              Login
            </p>
          </div>
        ) : (
          <div className="login-form-container">
            <input
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            ></input>
            <button onClick={() => login(email, password)}>Login</button>
            <p
              onClick={() => {
                setNewUser(true);
              }}
            >
              New User
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
