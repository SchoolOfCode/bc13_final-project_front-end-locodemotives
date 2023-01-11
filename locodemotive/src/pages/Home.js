import "./Home.css";
import NewContent from "../components/NewContent/NewContent";
import ChannelContent from "../components/ChannelContent/ChannelContent";
import { useEffect, useState } from "react";

export default function Home({ userData }) {
  const [newContent, setNewContent] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  async function getNewContent() {
    let newResourcesJSON = await fetch(
      `${process.env.REACT_APP_URL}/resources/search/?topic=${userData.team}&type=null`
    );
    let newResources = await newResourcesJSON.json();
    setNewContent(newResources.payload);
  }

  async function getMyPosts() {
    let postsJSON = await fetch(
      `${process.env.REACT_APP_URL}/posts/author/?author=${userData.name}`
    );
    let posts = await postsJSON.json();
    setMyPosts(posts.payload);
  }

  useEffect(() => {
    getNewContent();
    getMyPosts();
  }, []);

  return (
    <div className="my-learning">
      <div className="resource-container">
        <div className="my-area">
          <h1>My Learning</h1>
          <select name="My Posts">
            <option>My Posts</option>
            {myPosts.map((post, index) => {
              return <option key={index}>{post.title}</option>;
            })}
          </select>
          <select name="My Resources">
            <option>Resource 1</option>
            <option>Resource 2</option>
          </select>
        </div>
        <div className="whats-new">
          <h1>What's new</h1>
          <div className="new-content-container">
            {newContent[0] ? (
              <NewContent
                title={newContent[0].title}
                description={newContent[0].description}
              />
            ) : (
              <></>
            )}
            {newContent[1] ? (
              <NewContent
                title={newContent[1].title}
                description={newContent[1].description}
              />
            ) : (
              <></>
            )}
            {newContent[2] ? (
              <NewContent
                title={newContent[2].title}
                description={newContent[2].description}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="my-channels">
        <h1>My Channels</h1>
        <ChannelContent />
      </div>
    </div>
  );
}
