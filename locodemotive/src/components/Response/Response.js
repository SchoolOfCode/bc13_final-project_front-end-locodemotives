import "./Response.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Response({ replies, postData }) {
  const [replyAuthors, setReplyAuthors] = useState([]);

  async function getAuthorName(id) {
    let nameJSON = await fetch(`${process.env.REACT_APP_URL}/user/?id=${id}`);
    let name = await nameJSON.json();
    return name.payload.name;
  }

  async function getReplyAuthors() {
    setReplyAuthors([]);
    for (let i = 0; i < replies.length; i++) {
      let name = await getAuthorName(replies[i].author);
      setReplyAuthors((replyAuthors) => [...replyAuthors, name]);
    }
  }

  useEffect(() => {
    getReplyAuthors();
  }, [replies]);

  const showResponse = replies.map((reply, index) => {
    return (
      <div className="response-info-container">
        <h2>{replyAuthors[index]}</h2>
        <h3>{reply.date_created.slice(0, 10)}</h3>
        <div className="response-body">
          <p>{reply.body}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="response">
      <div className="response-info">
        {showResponse}
        <CustomLink to="/new_response" postData={postData}>
          New Response
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ to, children, postData }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <button className={isActive ? "active" : ""}>
      <Link to={to} state={{ postData: postData }}>
        {children}
      </Link>
    </button>
  );
}
