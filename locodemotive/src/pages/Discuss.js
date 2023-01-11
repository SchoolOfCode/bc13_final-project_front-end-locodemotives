import Post from "../components/Post/Post";
import "./Discuss.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Discuss({ userData }) {
  let [posts, setPosts] = useState([]);

  async function getAllPosts() {
    let allPostsJSON = await fetch(`${process.env.REACT_APP_URL}/posts`);
    let allPosts = await allPostsJSON.json();
    setPosts(allPosts.payload);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="discuss-content">
      <div className="navigation-bar">
        <input type="text" placeholder="Search"></input>
        <select>
          <option>Topic 1</option>
          <option>Topic 2</option>
          <option>Topic 3</option>
        </select>
        <button type="submit">Submit</button>
        <CustomLink to="/new_post">New Post</CustomLink>
      </div>
      <div className="post-container">
        {posts.map((postData) => {
          return <Post postData={postData} userData={userData} />;
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
