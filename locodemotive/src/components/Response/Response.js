import "./Response.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Response({ replies, postData }) {
  const [replyAuthors, setReplyAuthors] = useState([]);
  const [replyAuthorsImages, setReplyAuthorsImages] = useState([]);

  async function getAuthorName(id) {
    let nameJSON = await fetch(`${process.env.REACT_APP_URL}/user/?id=${id}`);
    let name = await nameJSON.json();
    return { name: name.payload.name, image: name.payload.image_url };
  }

  async function getReplyAuthors() {
    setReplyAuthors([]);
    setReplyAuthorsImages([]);
    for (let i = 0; i < replies.length; i++) {
      let { name, image } = await getAuthorName(replies[i].author);
      setReplyAuthors((replyAuthors) => [...replyAuthors, name]);
      setReplyAuthorsImages((replyAuthorsImages) => [
        ...replyAuthorsImages,
        image,
      ]);
    }
  }

  useEffect(() => {
    getReplyAuthors();
  }, [replies]);

  const showResponse = replies.map((reply, index) => {
    return (
      <div className="response-info-container">
        <div className="response-author">
          <span>
            <img
              id="pfp"
              src={replyAuthorsImages[index]}
              alt="ProfileImage"
            ></img>
          </span>
          <h3>{replyAuthors[index]}</h3>
        </div>
        <div className="response-body-box">
          <div className="response-date">
            <h3>{reply.date_created.slice(0, 10)}</h3>
          </div>
          <div className="response-body">
            <p>{reply.body}</p>
          </div>
        </div>
        {/* <h2>{replyAuthors[index]}</h2>
        <h3>{reply.date_created.slice(0, 10)}</h3>
        <div className="response-body">
          <p>{reply.body}</p>
        </div> */}
      </div>
    );
  });

  return (
    <div className="responses">
      {showResponse}
      <CustomLink to="/new_response" postData={postData}>
        New Response
      </CustomLink>
    </div>
  );
}

function CustomLink({ to, children, postData }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link to={to} state={{ postData: postData }}>
      <button className={isActive ? "active" : ""}>{children}</button>
    </Link>
  );
}
