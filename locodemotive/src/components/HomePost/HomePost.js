import "./HomePost.css";
import { Link } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";

// component for each recent post / response shown on the home page

const HomePost = (props) => {
  // props = {topic, date, title} or either post or response

  return (
    <div className="home-post-container">
      <div className="date-topic-container">
        {/* if it is a post it will have a topic, which is displayed, 
        otherwise it will use "Reply" as the topic */}
        <div className="topic-container">
          <h3>{props.topic ? props.topic : "Reply"}</h3>
        </div>
        <h3>{props.date}</h3>
      </div>
      <h2>{props.title}</h2>
      {/* arrow acts as a link to the discuss page
      Wanted to link to exact post but couldn't */}
      <CustomLink to="/discuss">&gt;</CustomLink>
    </div>
  );
};

// component used to create a link to any page in app - discuss page here
// to="/discuss" children="&gt" no props
function CustomLink({ to, children, ...props }) {
  // using react-router functions
  // set the path from the current location
  const resolvedPath = useResolvedPath(to);
  // and check it is correct
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    // create a link around a whole button
    // to="/discuss" no props
    <Link to={to} {...props}>
      {/* children="&gt"    isActive only if correct path*/}
      <button className={isActive ? "active" : ""}>{children}</button>
    </Link>
  );
}

export default HomePost;
