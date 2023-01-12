import { useEffect, useState } from "react";
import Response from "../Response/Response";
import "./Post.css";

export default function Post({ postData, userData }) {
  const [authorName, setAuthorName] = useState("");
  const [replies, setReplies] = useState([]);

  async function getAuthorName(id) {
    let nameJSON = await fetch(`${process.env.REACT_APP_URL}/user/?id=${id}`);
    let name = await nameJSON.json();
    setAuthorName(name.payload.name);
  }
  async function getReplies(post_id) {
    let responsesJSON = await fetch(
      `${process.env.REACT_APP_URL}/posts/replies/?post=${post_id}`
    );
    let responses = await responsesJSON.json();
    setReplies(responses.payload);
  }

  useEffect(() => {
    getAuthorName(postData.author);
    getReplies(postData.post_id);
  }, [postData]);

  return (
    <div className="post-container">
      <div className="post">
        <div className="post-info">
          <h1>{postData.title}</h1>
          <div className="topic-container">
            <h3>{postData.topic}</h3>
          </div>
          <h2>{authorName}</h2>
          <h2>{postData.date_created.slice(0, 10)}</h2>
        </div>
        <div className="post-body">
          <p>{postData.body}</p>
        </div>
      </div>
      <Response userData={userData} replies={replies} />
    </div>
  );
}
