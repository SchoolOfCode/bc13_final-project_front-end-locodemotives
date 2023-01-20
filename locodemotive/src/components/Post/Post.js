import { useEffect, useState } from "react";
import Response from "../Response/Response";
import DeletePost from "../DeletePost/DeletePost";
import "./Post.css";

// component to hold the post info and responses for each post
// props for the postInfo and repiesStart which will be an empty array []

export default function Post({ postData, repliesStart }) {
  // states for holding the author name and image for the post
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  // state to hold the replies in an array
  const [replies, setReplies] = useState(repliesStart);
  // state to toggle to post visibility - starts hidden
  const [postVisibility, setPostVisability] = useState(false);

  // function to get the author's name and profile image using a fetch request with with author_id
  async function getAuthorName(id) {
    let nameJSON = await fetch(`${process.env.REACT_APP_URL}/user/?id=${id}`);
    let name = await nameJSON.json();
    // set the states to the data found
    setAuthorName(name.payload.name);
    setAuthorImage(name.payload.image_url);
  }

  // function to get an array of replies for the post using a fetch request
  async function getReplies(post_id) {
    let responsesJSON = await fetch(
      `${process.env.REACT_APP_URL}/posts/replies/?post=${post_id}`
    );
    let responses = await responsesJSON.json();
    // put the array into the state
    setReplies(responses.payload);
  }

  // function to toggle post visibility
  function changePostVisibility() {
    setPostVisability(!postVisibility);
  }

  // when each post is rendered, collect all the data for the post
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
            {/* arrow at the end of the title bar to toggle visability of the main post */}
            <button className="arrow-down" onClick={changePostVisibility}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      {/* main part of the post - visibility is decided on by the class */}
      <div className={postVisibility ? "post" : "hidden-post"}>
        <div className="post-body-container">
          {/* left side with info about author */}
          <div className="post-author">
            <span>
              <img id="pfp" src={authorImage} alt="ProfileImage"></img>
            </span>
            <h3>{authorName}</h3>
          </div>
          {/* right side with post */}
          <div className="post-body-box">
            <div className="post-date">
              {/* slice to only sow date not time */}
              <h3>{postData.date_created.slice(0, 10)}</h3>
            </div>
            <div className="post-body">
              <p>{postData.body}</p>
            </div>
            <div className="post-body-delete">
              {/* conditional rendering - for only your posts there is the delete post component - a button to delete the post and its replies*/}
              {postData.author.toString() === localStorage.user ? (
                <DeletePost post_id={postData.post_id} replies={replies} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {/* the response component will display all the responses to a post */}
        <Response
          postsVisible={postVisibility}
          replies={replies}
          postData={postData}
        />
      </div>
    </div>
  );
}
