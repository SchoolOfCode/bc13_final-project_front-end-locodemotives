import "./Learn.css";
import LearnTopic from "../components/LearnTopic/LearnTopic";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Learn() {
  const [resources, setResources] = useState([]);

  const [type, setType] = useState("");

  const getAllResources = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/resources`);
    const data = await response.json();
    setResources(data.payload);
  };

  const getResourceByType = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL}/resources/search/?topic=null&type=${type}`
    );
    const data = await response.json();
    setResources(data.payload);
    console.log(data);
  };

  const handleClick = async () => {
    getResourceByType();
  };

  useEffect(() => {
    getAllResources();
  }, []);

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
            <select
              name="Type"
              onChange={(e) => {
                if (e.target.value !== "Any") {
                  setType(e.target.value);
                  handleClick();
                } else {
                  getAllResources();
                }
                console.log(type);
              }}
            >
              <option selected disabled>
                Sort By Type:
              </option>
              <option>Any</option>
              <option>Book</option>
              <option>Website</option>
              <option>Course</option>
              <option>Article</option>
              <option>Video</option>
            </select>
            <div className="page-buttons">
              <button>Back</button>
              <button>Forward</button>
            </div>
          </div>
          <div className="learn-topic-container">
            {resources.map((resourceData, index) => {
              return <LearnTopic key={index} resourceData={resourceData} />;
            })}
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
