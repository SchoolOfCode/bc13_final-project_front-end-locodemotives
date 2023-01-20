import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewResponse.css";
import "../../App.css";
import Back from "../Images/Back.png";

// component for form for creating a new reply to a post
// props bring in id for author and user to link in database as foreign keys

export default function NewResponse({ author_id, post_id }) {
  // naviage to move to a different page
  const navigate = useNavigate();

  // state to hold the body of the reply
  const [body, setBody] = useState("");

  // function called when new reply submited
  async function submitNewResponse() {
    // validate that there is something in the reply
    if (body !== "") {
      let newResponseJSON = await fetch(
        `${process.env.REACT_APP_URL}/posts/reply`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            post: post_id,
            author: author_id,
            body: body,
            date_created: new Date(),
          }),
        }
      );
      await newResponseJSON.json();
      navigate("/discuss");
    }
  }

  function back() {
    navigate("/discuss");
  }

  return (
    <div className="page-content">
      <div className="back-button">
        <button id="back-btn" onClick={back}>
          <img src={Back} alt="back"></img>
        </button>
      </div>
      <div className="new-response">
        <h1>New Response</h1>
        <div className="new-response-submission">
          <textarea
            type="text"
            placeholder="Response Body"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" onClick={submitNewResponse}>
          Submit
        </button>
      </div>
    </div>
  );
}
