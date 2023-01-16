import "./HomePost.css";

const HomePost = (props) => {
  return (
    <div className="home-post-container">
      <div className="date-topic-container">
        <h3>{props.topic}</h3>
        <h3>{props.date}</h3>
      </div>
      <h2>{props.title}</h2>
      <h1>&gt;</h1>
    </div>
  );
};
export default HomePost;
