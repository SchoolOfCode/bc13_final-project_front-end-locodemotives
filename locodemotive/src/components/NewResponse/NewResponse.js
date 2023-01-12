import "./NewResponse.css";

export default function NewResponse({ author_id, post_id }) {
  return (
    <div className="new-response">
      <h1>New Response</h1>
      <div className="new-response-submission">
        <textarea type="text" placeholder="Response Body"></textarea>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
}
