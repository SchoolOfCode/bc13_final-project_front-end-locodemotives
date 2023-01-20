import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import "../../App.css";
import Back from "../Images/Back.png";

// component for form to collect data to make a new post
// props bring in infomation about user as author is needed when creating a post

export default function NewPost({ userData }) {
  // navigate is used to return you to the discuss page when a post is made or the back button pressed
  const navigate = useNavigate();

  // options for topic dropdown - lets us use a map so shorter JSX
  let topics = [
    "General",
    "Support Services",
    "DevOps",
    "Digital Development",
    "Buisness Analysis",
    "Marketing",
  ];

  // states to hold all information for new post
  // intial values to match the empty page / first dropdown option
  let [title, setTitle] = useState("");
  let [topic, setTopic] = useState("General");
  let [body, setBody] = useState("");

  // function called when submit button pressed
  async function submitNewPost() {
    // validate - you need something in every box
    if (title !== "" && body !== "") {
      let newPostJSON = await fetch(`${process.env.REACT_APP_URL}/posts/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // data from states to match input fields
          title: title,
          topic: topic,
          body: body,
          // date created uses inbuilt Date to get current date / time
          date_created: new Date(),
          // author uses data passed in as prop (userData)
          author: userData.user_id,
        }),
      });
      await newPostJSON.json();
      // return to discuss page when post created
      navigate("/discuss");
    }
  }

  // function for back button to return to discuss page
  function back() {
    navigate("/discuss");
  }

  return (
    <div className="page-content">
      {/* back button with image of arrow imported at top */}
      <div className="back-button">
        <button id="back-btn" onClick={back}>
          <img src={Back} alt="back"></img>
        </button>
      </div>
      {/* main body of page */}
      <div className="new-post">
        <h1>New Post</h1>
        {/* all input fields */}
        <div className="new-post-submission">
          <input
            type="text"
            placeholder="Title"
            required
            onChange={(e) => {
              // whenever input is changed it updates state to keep track
              setTitle(e.target.value);
            }}
          ></input>
          <textarea
            type="text"
            placeholder="Post Body"
            wordWrap="false"
            required
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          {/* dropdown selection changes topic state */}
          <select
            required
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          >
            {" "}
            <option selected disabled>
              Select Topic:
            </option>
            {/* creates an option for each topic in the array defined at the start */}
            {topics.map((topic, index) => {
              return (
                <option value={topic} key={index}>
                  {topic}
                </option>
              );
            })}
          </select>
        </div>
        {/* button to submit - calls function */}
        <button type="submit" onClick={submitNewPost}>
          Submit
        </button>
      </div>
    </div>
  );
}
