import { useState } from "react";
import "./NewResponse.css";

export default function NewResponse({ author_id, post_id }) {
  const [body, setBody] = useState("");

  async function submitNewResponse() {
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
  }

  return (
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
  );
}
