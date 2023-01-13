import "./Home.css";
import NewContent from "../components/NewContent/NewContent";
import ChannelContent from "../components/ChannelContent/ChannelContent";
import { useEffect, useState } from "react";
// import Collapsible from "../components/HomePost/HomePost";
import HomePost from "../components/HomePost/HomePost";
// import Post from "../components/Post/Post";

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

  // const sortPostOrReplyByDate = async () => {
  //   const firstThreePosts = await myPosts.slice(0, 3);
  //   const firstThreeResponses = await myResponses.slice(0, 3);

  //   let postandr = [];

  //   postandr.push(...firstThreePosts, ...firstThreeResponses);

  // postandr.sort((a, b) => {
  //   return a.date_created - b.date_created;
  // });

  //   const sortArray = (arr = []) => {
  //     arr.sort((a, b) => {
  //       return b.date_created - a.date_created;
  //     });
  //   };

  //   console.log(postandr);

  //   sortArray(postandr);

  //   console.log(postandr);

  //   postandr = postandr.slice(0, 3);

  //   setPostsAndResponses(postandr);
  // };

  // const objectComparisonCallback = (arrayItemA, arrayItemB, arrayItemC) => {
  //   if (arrayItemA.date_created < arrayItemB.date_created && ) {
  //     return -1
  //   }

  //   if (arrayItemA.date_created > arrayItemB.date_created) {
  //     return 1
  //   }

  //   return 0
  // }

  // arrayOfObjects.sort(objectComparisonCallback)

  useEffect(() => {
    getNewContent();
    getMyPosts();
    getMyResponses();
  }, []);

  // useEffect(() => {
  //   sortPostOrReplyByDate();
  // }, [myResponses]);

  return (
    <div className="my-learning">
      <div className="resource-container">
        <div className="my-area">
          <h1>My Posts</h1>
          {/* <select name="My Posts">
            <option>My Posts</option>
            {myPosts.map((post, index) => {
              return <option key={index}>{post.title}</option>;
            })}
          </select>
          <select name="My Resources">
            <option>Resource 1</option>
            <option>Resource 2</option>
          </select> */}

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
