import "./Home.css";
import NewContent from "../components/NewContent/NewContent";
import ChannelContent from "../components/ChannelContent/ChannelContent";
import { useEffect, useState } from "react";
import HomePost from "../components/HomePost/HomePost";

export default function Home({ userData }) {
  const [newContent, setNewContent] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [myResponses, setMyResponses] = useState([]);

  const [postsAndResponses, setPostsAndResponses] = useState([]);

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

  const getMyResponses = async () => {
    let response = await fetch(
      `${process.env.REACT_APP_URL}/posts/replies?user=${userData.user_id}`
    );
    let data = await response.json();
    setMyResponses(data.payload);
  };

  // Sort the 'MyPosts' into the 3 most recent posts OR replies
  const sortPostOrReplyByDate = async () => {
    const firstThreePosts = await myPosts.slice(0, 3); // Already sorted by date in database
    const firstThreeResponses = await myResponses.slice(0, 3); // Already sorted by date in database

    let postAndReplies = [];
    postAndReplies.push(...firstThreePosts, ...firstThreeResponses); // Combine posts and responses into a new array

    postAndReplies.sort((a, b) => {
      return new Date(b.date_created) - new Date(a.date_created); // Sort combined array by date
    });

    postAndReplies = postAndReplies.slice(0, 3); // Slice array to just be first 3 posts or arrays

    setPostsAndResponses(postAndReplies); // Set state to new sliced array
  };

  useEffect(() => {
    getNewContent();
    getMyPosts();
    getMyResponses();
  }, []);

  useEffect(() => {
    sortPostOrReplyByDate();
  }, [myResponses]);

  return (
    <div className="my-learning">
      <div className="resource-container">
        <div className="my-area">
          <h1>My Posts</h1>
          {postsAndResponses[0] ? (
            <HomePost
              topic={postsAndResponses[0].topic}
              title={postsAndResponses[0].body}
              date={postsAndResponses[0].date_created.slice(0, 10)}
            />
          ) : (
            <></>
          )}
          {postsAndResponses[1] ? (
            <HomePost
              topic={postsAndResponses[1].topic}
              title={postsAndResponses[1].body}
              date={postsAndResponses[1].date_created.slice(0, 10)}
            />
          ) : (
            <></>
          )}
          {postsAndResponses[2] ? (
            <HomePost
              topic={postsAndResponses[2].topic}
              title={postsAndResponses[2].body}
              date={postsAndResponses[2].date_created.slice(0, 10)}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="whats-new">
          <h1>What's New</h1>
          <div className="new-content-container">
            {newContent[0] ? (
              <NewContent
                title={newContent[0].title}
                description={newContent[0].description}
                link={newContent[0].link}
              />
            ) : (
              <></>
            )}
            {newContent[1] ? (
              <NewContent
                title={newContent[1].title}
                description={newContent[1].description}
                link={newContent[2].link}
              />
            ) : (
              <></>
            )}
            {newContent[2] ? (
              <NewContent
                title={newContent[2].title}
                description={newContent[2].description}
                link={newContent[2].link}
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
