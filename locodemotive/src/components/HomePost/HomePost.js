import "./HomePost.css";

const HomePost = (props) => {
  return (
    <div className="home-post-container">
      <div className="date-topic-container">
      <div className="topic-container">
        <h3>{props.topic}</h3>
      </div>
        <h3>{props.date}</h3>
      </div>
      <h2>{props.title}</h2>
      <p>&gt;</p>
    </div>
  );
};
export default HomePost;
