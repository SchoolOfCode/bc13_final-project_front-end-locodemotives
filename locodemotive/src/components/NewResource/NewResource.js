import "./NewResource.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewResource({ userData }) {
  const [newResourceInfo, setResourceInfo] = useState({
    title: "",
    description: "",
    link: "",
    topic: "",
    type: "",
    author: "",
    date_created: "",
  });

  const navigate = useNavigate();

  const handleClickSubmit = async () => {
    let date = new Date();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/resources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newResourceInfo,
          ...{ author: userData.user_id, date_created: date },
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    navigate("/learn");
  };

  return (
    <div className="new-resource">
      <h1>New Resource</h1>
      <div className="new-resource-submission">
        <input
          type="text"
          placeholder="Title"
          required
          onChange={(e) => {
            newResourceInfo.title = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        ></input>
        <textarea
          type="text"
          placeholder="Description"
          required
          onChange={(e) => {
            newResourceInfo.description = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        ></textarea>
        <input
          type="text"
          placeholder="Link"
          required
          onChange={(e) => {
            newResourceInfo.link = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        ></input>
        <select
          placeholder="Topic"
          name="Topic"
          required
          onChange={(e) => {
            newResourceInfo.topic = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        >
          <option selected disabled>
            Select Topic:
          </option>
          <option>General</option>
          <option>DevOps</option>
          <option>Support Services</option>
          <option>Digital Development</option>
          <option>Business Analysis</option>
          <option>Marketing</option>
        </select>
        <select
          placeholder="Type"
          required
          onChange={(e) => {
            newResourceInfo.type = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        >
          <option selected disabled>
            Select Type:
          </option>
          <option>Book</option>
          <option>Website</option>
          <option>Course</option>
          <option>Article</option>
          <option>Video</option>
        </select>
        <button onClick={handleClickSubmit}>Submit</button>
      </div>
    </div>
  );
}
