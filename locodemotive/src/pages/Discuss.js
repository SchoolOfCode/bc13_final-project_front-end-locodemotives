import Post from "../components/Post/Post";
import "./Discuss.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Discuss({ userData }) {
  let [posts, setPosts] = useState([]);
  let [searchTitle, setSearchTitle] = useState("null");
  let [searchTopic, setSearchTopic] = useState("null");
  let [topics, setTopics] = useState([]);

  async function getAllPosts() {
    let allPostsJSON = await fetch(`${process.env.REACT_APP_URL}/posts`);
    let allPosts = await allPostsJSON.json();
    setPosts(allPosts.payload);
    await findTopics();
  }

  async function findTopics() {
    for (let i = 0; i < posts.length; i++) {
      setTopics([...topics, posts[i].topic]);
    }
  }

  async function searchForPosts() {
    if (searchTitle === "" || searchTitle === " ") {
      setSearchTitle("null");
    }
    if (searchTitle === "null" && searchTopic === "null") {
      return getAllPosts();
    }
    let searchPostsJSON = await fetch(
      `${process.env.REACT_APP_URL}/posts/search/?title=${searchTitle}&topic=${searchTopic}`
    );
    let searchPosts = await searchPostsJSON.json();
    setPosts(searchPosts.payload);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="discuss-content">
      <div className="navigation-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTitle(e.target.value);
          }}
        ></input>
        <select
          onChange={(e) => {
            setSearchTopic(e.target.value);
          }}
        >
          <option value={"null"}>Select Topic</option>
          {/* <option value={"PostgreSQL"}>PostgreSQL</option>
          <option value={"CSS"}>CSS</option> */}
          {topics.map((topic, index) => {
            return (
              <option value={topic} key={index}>
                {topic}
              </option>
            );
          })}
        </select>
        <button type="submit" onClick={searchForPosts}>
          Submit
        </button>
        <CustomLink to="/new_post">New Post</CustomLink>
      </div>
      <div className="post-container">
        {posts.map((postData, index) => {
          return <Post key={index} postData={postData} userData={userData} />;
        })}
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
