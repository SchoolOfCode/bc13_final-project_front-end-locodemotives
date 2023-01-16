import { useEffect, useState } from "react";
import Response from "../Response/Response";
import DeletePost from "../DeletePost/DeletePost";
import "./Post.css";

export default function Post({ postData, repliesStart }) {
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [replies, setReplies] = useState(repliesStart);
  const [postVisibility, setPostVisability] = useState(false);

  async function getAuthorName(id) {
    let nameJSON = await fetch(`${process.env.REACT_APP_URL}/user/?id=${id}`);
    let name = await nameJSON.json();
    setAuthorName(name.payload.name);
    setAuthorImage(name.payload.image_url);
  }

  async function getReplies(post_id) {
    let responsesJSON = await fetch(
      `${process.env.REACT_APP_URL}/posts/replies/?post=${post_id}`
    );
    let responses = await responsesJSON.json();
    setReplies(responses.payload);
  }

  function changePostVisibility() {
    setPostVisability(!postVisibility)

  }

  useEffect(() => {
    getAuthorName(postData.author);
    getReplies(postData.post_id);
  }, [postData]);

  return (
    <div className="post-container">
      <div className="post-title-bar">
        <div className="post-title-topic">
          <div className="topic-container">
            <h3>{postData.topic}</h3>
          </div>
          <div className="title-arrow-container">
            <h1>{postData.title}</h1>
            <button className="arrow-down" onClick={changePostVisibility}>&gt;</button>
          </div>
        </div>
      </div>
      <div className={postVisibility ? "post" : "hidden-post"}>
        <div className="post-body-container">
          <div className="post-author">
            <span>
              <img id="pfp" src={authorImage} alt="ProfileImage"></img>
            </span>
            <h3>{authorName}</h3>
          </div>
          <div className="post-body-box">
            <div className="post-date">
              <h3>{postData.date_created.slice(0, 10)}</h3>
            </div>
            <div className="post-body">
              <p>{postData.body}</p>
            </div>
            <div className="post-body-delete">
              {postData.author.toString() === localStorage.user ? (
                <DeletePost post_id={postData.post_id} replies={replies} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <Response postsVisible={postVisibility} replies={replies} postData={postData} />
      </div>
    </div>
  );
}
