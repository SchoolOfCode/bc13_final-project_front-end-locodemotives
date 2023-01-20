import "./MyPosts.css";
import { Link } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";

const MyPosts = (props) => {
  console.log("props", props);

  return (
    <div className="home-post-container">
      <div className="date-topic-container">
        <div className="topic-container">
          <h3>{props.topic ? props.topic : "Reply"}</h3>
        </div>
        <h3>{props.date}</h3>
      </div>
      <h2>{props.title}</h2>
      <CustomLink to="/discuss">&gt;</CustomLink>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <button className={isActive ? "active" : ""}>{children}</button>
    </Link>
  );
}

export default MyPosts;
