import "./Learn.css";
import LearnTopic from "../components/LearnTopic/LearnTopic";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Learn() {
  return (
    <div className="learn-content">
      <div className="topic-list-container">
        <h1>Topic</h1>
        <div className="topics">
          <h2>General</h2>
          <h2>DevOps</h2>
          <h2>Support Services</h2>
          <h2>Digtial Delivery</h2>
          <h2>Business Analysis</h2>
        </div>
      </div>
      <div className="explore-container">
        <div className="explore-header">
          <div className="explore-header-top">
            <h1>Explore</h1>
            <CustomLink to="/new_resource">Add Resource</CustomLink>
          </div>
          <div className="explore-header-selectors">
            <select name="Type">
              <option>Placeholder</option>
              <option>Placeholder</option>
            </select>
            <div className="page-buttons">
              <button>Back</button>
              <button>Forward</button>
            </div>
          </div>
          <div className="learn-topic-container">
            <LearnTopic />
            <LearnTopic />
            <LearnTopic />
            <LearnTopic />
            <LearnTopic />
            <LearnTopic />
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <button className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </button>
  );
}
