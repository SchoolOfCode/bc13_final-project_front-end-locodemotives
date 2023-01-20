import "./Response.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

// component to display all the replies a post
// takes in props with array of replies, the postData (need post_id for new response) and the class of the post setting visability

export default function Response({ replies, postData, postVisibility }) {
  // set states for array of the names and images of the reply authors
  const [replyAuthors, setReplyAuthors] = useState([]);
  const [replyAuthorsImages, setReplyAuthorsImages] = useState([]);
  // state to set the visability of the replies
  const [replyVisability, setReplyVisability] = useState("hidden-group");

  // function to get the name and image of an author by id
  async function getAuthorName(id) {
    let nameJSON = await fetch(`${process.env.REACT_APP_URL}/user/?id=${id}`);
    let name = await nameJSON.json();
    return { name: name.payload.name, image: name.payload.image_url };
  }

  // function to store the name and image of the author for each post
  async function getReplyAuthors() {
    // start by setting the states to empty arrays
    setReplyAuthors([]);
    setReplyAuthorsImages([]);
    // for loop - for each reply
    for (let i = 0; i < replies.length; i++) {
      // function that performs fetch request
      let { name, image } = await getAuthorName(replies[i].author);
      // set states using spread
      setReplyAuthors((replyAuthors) => [...replyAuthors, name]);
      setReplyAuthorsImages((replyAuthorsImages) => [
        ...replyAuthorsImages,
        image,
      ]);
    }
  }

  // functin to change visibility of replies by changing class applied
  function changeReplyVisibility() {
    if (replyVisability === "hidden-group") {
      setReplyVisability("show-group");
    } else {
      setReplyVisability("hidden-group");
    }
  }

  // whenever a new set of replies is being rendered set the authors up
  useEffect(() => {
    getReplyAuthors();
  }, [replies]);

  return (
    // should only be visable if the whole post is - using prop
    <div className={postVisibility ? "hidden-group" : "responses"}>
      {/* visability of replies part of post specificly 
      css reverse flex means this is displayed in reverse*/}
      <div className={replyVisability}>
        {replies &&
          replies.map &&
          replies.map((reply, index) => {
            // for each reply in the replies prop array
            return (
              <div className="response-info-container">
                <div className="response-author">
                  {/* author profile image from array */}
                  <span>
                    <img
                      id="pfp"
                      src={replyAuthorsImages[index]}
                      alt="ProfileImage"
                    ></img>
                  </span>
                  {/* and name */}
                  <h3>{replyAuthors[index]}</h3>
                </div>
                {/* response body and date created */}
                <div className="response-body-box">
                  <div className="response-date">
                    <h3>{reply.date_created.slice(0, 10)}</h3>
                  </div>
                  <div className="response-body">
                    <p>{reply.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* buttons to let you create a new response to the post and change visability of replies */}
      <div className="new-response-button">
        {/* change reply visability */}
        <button className="show-reply-button" onClick={changeReplyVisibility}>
          See More Responses
        </button>
        {/* link to new response page */}
        <CustomLink to="/new_response" postData={postData}>
          New Response
        </CustomLink>
      </div>
    </div>
  );
}

// link to new response page
// to="/new_response" children="New Response" props="postData"
function CustomLink({ to, children, postData }) {
  // find path to new response page from current location and check it works
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    // link is around a button
    // passes props of postData as a state called propsData
    <Link to={to} state={{ postData: postData }}>
      {/* children in button is the html "New Response" - what is shown on the button */}
      <button className={isActive ? "active" : ""}>{children}</button>
    </Link>
  );
}
