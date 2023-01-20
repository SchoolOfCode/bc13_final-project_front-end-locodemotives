import Post from "../components/Post/Post";
import "./Discuss.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Discuss() {
  let [posts, setPosts] = useState([]);
  let [searchTitle, setSearchTitle] = useState("null");
  let [searchTopic, setSearchTopic] = useState("null");

  let topics = [
    "Support Services",
    "DevOps",
    "Digital Development",
    "Buisness Analysis",
    "General",
    "Marketing",
  ]; // Set topics that display on left side filter

  async function getPosts() {
    let response = await fetch(`${process.env.REACT_APP_URL}/posts`);
    let data = await response.json();
    setPosts(data.payload);
  }

  // prettier-ignore
  async function searchPosts() {
    if (searchTitle === "" || searchTitle === " ") { // if state is empty
      setSearchTitle("null");                        // set state to null (which is default state for getPosts)
    }
    if (searchTitle === "null" && searchTopic === "null") { // where search is "null"
      return getPosts();                                    // get posts
    }
    let response = await fetch(
      `${process.env.REACT_APP_URL}/posts/search/?title=${searchTitle}&topic=${searchTopic}`
    );
    let data = await response.json();
    setPosts(data.payload);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="discuss-content">
      <div className="navigation-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTitle(e.target.value); // set search title value
          }}
        ></input>
        <select
          onChange={(e) => {
            setSearchTopic(e.target.value); // set search topic value
          }}
        >
          <option value={"null"}>All</option>
          {topics.map((topic, index) => {
            return (
              <option value={topic} key={index}>
                {topic}
              </option>
            ); // take topic array and create left side filter from values
          })}
        </select>
        <button type="submit" onClick={searchPosts}>
          Submit
        </button>
        <CustomLink to="/new_post">New Post</CustomLink>
      </div>
      <div className="post-container">
        {posts.map((postData, index) => {
          return <Post key={index} postData={postData} repliesStart={[]} />;
        })}
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} {...props}>
      <button className={isActive ? "active" : ""}>{children}</button>
    </Link>
  );
}
