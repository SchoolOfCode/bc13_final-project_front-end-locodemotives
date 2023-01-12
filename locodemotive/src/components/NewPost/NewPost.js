import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";

export default function NewPost({ userData }) {
  const navigate = useNavigate();

  let topics = [
    "General",
    "Support Services",
    "DevOps",
    "Digital Development",
    "Buisness Analysis",
  ];

  let [title, setTitle] = useState("");
  let [topic, setTopic] = useState("General");
  let [body, setBody] = useState("");

  async function submitNewPost() {
    if (title !== "" && body !== "") {
      let newPostJSON = await fetch(`${process.env.REACT_APP_URL}/posts/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          topic: topic,
          body: body,
          date_created: new Date(),
          author: userData.user_id,
        }),
      });
      await newPostJSON.json();
      navigate("/discuss");
    }
  }

  return (
    <div className="new-post">
      <h1>New Post</h1>
      <div className="new-post-submission">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <textarea
          type="text"
          placeholder="Post Body"
          wordWrap="false"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <select
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          {topics.map((topic, index) => {
            return (
              <option value={topic} key={index}>
                {topic}
              </option>
            );
          })}
        </select>
        {/* <input type="text" placeholder="Notify a team member"></input> */}
      </div>
      <button type="submit" onClick={submitNewPost}>
        Submit
      </button>
    </div>
  );
}
