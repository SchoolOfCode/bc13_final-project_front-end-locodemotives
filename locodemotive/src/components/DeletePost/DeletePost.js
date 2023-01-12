export default function DeletePost({ post_id, replies }) {
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
    window.location.reload(false);
  }

  return <button onClick={handleClick}>Delete Post</button>;
}
