import "./Login.css";
import Logo from "../Content/Logo.png";
import { useState } from "react";
import profileImage from "../../components/Images/default_profile.png";

export default function Login({ login }) {
  const teams = [
    "DevOps",
    "Support Services",
    "Digital Development",
    "Business Analysis",
    "Marketing",
  ]; // Set teams for accounts
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  const [newData, setNewData] = useState({
    name: "",
    email: "",
    password: "",
    image_url: profileImage,
    team: "DevOps",
  });

  async function createNewUser() {
    let valid = validateNewInfo();
    if (valid) {
      // If login data is valid, post it to database
      let response = await fetch(`${process.env.REACT_APP_URL}/user/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      await response.json();
      await login(newData.email, newData.password);
    }
  }

  // Checking if new login data exists
  function validateNewInfo() {
    if (
      newData.name !== "" &&
      newData.email !== "" &&
      newData.password !== "" &&
      newData.team !== ""
    ) {
      if (newData.image_url === "") {
        newData.image_url = profileImage;
      }
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="content">
      <div className="login-container">
        <div className="logo-container">
          <img src={Logo} alt="Locodemotive Icon"></img>
        </div>
        {newUser ? (
          <div className="new-user-form-container">
            {newData.image_url !== "" ? (
              <img src={newData.image_url} alt="profile image"></img>
            ) : (
              <img src={profileImage} alt="profile image"></img>
            )}
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setNewData({ ...newData, name: e.target.value });
              }}
            ></input>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setNewData({ ...newData, email: e.target.value });
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setNewData({ ...newData, password: e.target.value });
              }}
            ></input>
            <input
              type="text"
              placeholder="Profile image URL"
              onChange={(e) => {
                setNewData({ ...newData, image_url: e.target.value });
              }}
            ></input>
            <select
              name="Team"
              onChange={(e) => {
                setNewData({ ...newData, team: e.target.value });
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
            <button onClick={createNewUser}>Create</button>
            <p
              onClick={() => {
                setNewUser(false);
              }}
            >
              Back To Login
            </p>
          </div>
        ) : (
          <div className="login-form-container">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button type="button" onClick={() => login(email, password)}>
              Login
            </button>
            <p
              onClick={() => {
                setNewUser(true);
              }}
            >
              Create New User
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
