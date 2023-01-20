import "./Home.css";
import { useEffect, useState } from "react";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import MyChannels from "../../components/MyChannels/MyChannels";
import MyPosts from "../../components/MyPosts/MyPosts";

export default function Home({ userData }) {
  const [whatsNew, setWhatsNew] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [myResponses, setMyResponses] = useState([]);

  const [postsAndResponses, setPostsAndResponses] = useState([]);

  async function getWhatsNew() {
    let newResourcesJSON = await fetch(
      `${process.env.REACT_APP_URL}/resources/search/?topic=${userData.team}&type=null`
    );
    let newResources = await newResourcesJSON.json();
    setWhatsNew(newResources.payload);
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

  // sort the 'MyPosts' into the 3 most recent posts OR replies
  const sortPostOrReplyByDate = () => {
    const firstThreePosts = myPosts.slice(0, 3); // already sorted by date in database
    const firstThreeResponses = myResponses.slice(0, 3); // already sorted by date in database

    let array = [];
    array.push(...firstThreePosts, ...firstThreeResponses); // combine posts and responses into a new array

    array.sort((a, b) => {
      return new Date(b.date_created) - new Date(a.date_created); // sort combined array by date
    });

    array = array.slice(0, 3); // slice array to just be first 3 posts or arrays

    setPostsAndResponses(array); // set state to new sliced array
  };

  useEffect(() => {
    getWhatsNew();
    getMyPosts();
    getMyResponses();
  }, []);

  useEffect(() => {
    sortPostOrReplyByDate();
  }, [myPosts, myResponses]);

  return (
    <div className="my-learning">
      <div className="resource-container">
        <div className="my-area">
          <h1>My Posts</h1>
          {postsAndResponses[0] ? (
            <MyPosts
              topic={postsAndResponses[0].topic}
              title={postsAndResponses[0].body}
              date={postsAndResponses[0].date_created.slice(0, 10)}
            />
          ) : (
            <></>
          )}
          {postsAndResponses[1] ? (
            <MyPosts
              topic={postsAndResponses[1].topic}
              title={postsAndResponses[1].body}
              date={postsAndResponses[1].date_created.slice(0, 10)}
            />
          ) : (
            <></>
          )}
          {postsAndResponses[2] ? (
            <MyPosts
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
            {whatsNew[0] ? (
              <WhatsNew
                title={whatsNew[0].title}
                description={whatsNew[0].description}
                link={whatsNew[0].link}
              />
            ) : (
              <></>
            )}
            {whatsNew[1] ? (
              <WhatsNew
                title={whatsNew[1].title}
                description={whatsNew[1].description}
                link={whatsNew[2].link}
              />
            ) : (
              <></>
            )}
            {whatsNew[2] ? (
              <WhatsNew
                title={whatsNew[2].title}
                description={whatsNew[2].description}
                link={whatsNew[2].link}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="my-channels">
        <h1>My Channels</h1>
        <MyChannels />
      </div>
    </div>
  );
}
