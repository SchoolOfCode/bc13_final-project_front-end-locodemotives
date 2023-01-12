// import { useNavigate } from "react-router-dom";

export default function DeletePost({ post_id, replies, forceUpdate }) {
  // const navigate = useNavigate();

  async function handleClick() {
    // delete responses to the post
    // must be done first so no foreign key issues
    for (let i = 0; i < replies.length; i++) {
      let deletedReplyJSON = await fetch(
        `${process.env.REACT_APP_URL}/posts/deleteReply/${replies[i].reply_id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      await deletedReplyJSON.json();
    }
    // delete the post
    let deletedPostJSON = await fetch(
      `${process.env.REACT_APP_URL}/posts/deletePost/${post_id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    await deletedPostJSON.json();
    // window.location.reload(false);
    // navigate("/discuss");
    forceUpdate();
  }

  return (
    <button onClick={handleClick} className="deleteButton">
      Delete Post
    </button>
  );
}
