import "./Learn.css";
import LearnTopic from "../components/LearnTopic/LearnTopic";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Learn() {
  const [resources, setResources] = useState([]);

  const [type, setType] = useState("null");
  const [topic, setTopic] = useState("null");

  const getAllResources = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/resources`);
    const data = await response.json();
    setResources(data.payload);
  };

  const getResourceByTypeAndTopic = async () => {
    if (type === "null" && topic === "null") {
      await getAllResources();
    } else {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/resources/search/?topic=${topic}&type=${type}`
      );
      const data = await response.json();
      setResources(data.payload);
    }
  };

  // const handleClick = async (e) => {
  //   setType(e.target.value);
  //   console.log(type);
  //   await getResourceByType();
  // };

  useEffect(() => {
    getAllResources();
  }, []);

  useEffect(() => {
    getResourceByTypeAndTopic();
  }, [topic, type]);

  return (
    <div className="learn-content">
      <div className="topic-list-container">
        <h1>Topic</h1>
        <div className="topics">
          <h2 onClick={() => setTopic("null")}>All</h2>
          <h2 onClick={() => setTopic("General")}>General</h2>
          <h2 onClick={() => setTopic("DevOps")}>DevOps</h2>
          <h2 onClick={() => setTopic("Support Services")}>Support Services</h2>
          <h2 onClick={() => setTopic("Digital Development")}>
            Digital Development
          </h2>
          <h2 onClick={() => setTopic("Business Analysis")}>
            Business Analysis
          </h2>
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
                setType(e.target.value);
              }}
            >
              <option selected value="null">
                All
              </option>
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
