import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewResponse.css";
import '../../App.css'
import Back from '../Images/Back.png'

export default function NewResponse({ author_id, post_id }) {
  const navigate = useNavigate();
  const [body, setBody] = useState("");

  async function submitNewResponse() {
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
    navigate("/discuss")
  }

  return (
    <div className="page-content">
      <div className="back-button">
        <button id="back-btn" onClick={back}><img src={Back} alt="back"></img></button>
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