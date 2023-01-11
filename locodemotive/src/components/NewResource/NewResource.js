import "./NewResource.css";
import { useState } from "react";

export default function NewResource() {
  const [newResourceInfo, setResourceInfo] = useState({
    title: "",
    description: "",
    link: "",
    topic: "",
    type: "",
  });

  const handleClickSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/resources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResourceInfo),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
          placeholder="Resource Description"
          required
          onChange={(e) => {
            newResourceInfo.description = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        ></textarea>
        <input
          type="text"
          placeholder="Resource Link"
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
          <option>DevOps</option>
          <option>Support Services</option>
          <option>Digital Delivery</option>
          <option>Business Analysis</option>
        </select>
        <select
          placeholder="Type"
          required
          onChange={(e) => {
            newResourceInfo.type = e.target.value;
            setResourceInfo(newResourceInfo);
          }}
        >
          <option>Type 1</option>
          <option>Type 2</option>
          <option>Type 3</option>
        </select>
        <button onClick={handleClickSubmit}>Submit</button>
      </div>
    </div>
  );
}
