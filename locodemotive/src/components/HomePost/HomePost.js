// import { useState } from "react";

const HomePost = (props) => {
  return (
    <div>
      <h3>{props.topic}</h3>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
    </div>
  );
};
export default HomePost;
