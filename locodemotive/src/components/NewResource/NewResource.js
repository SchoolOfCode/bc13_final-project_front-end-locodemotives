import "./NewResource.css";
import "../../App.css";
import Back from "../Images/Back.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// component to hold the form for creating a new resource
// props bring in infomation about user as author is needed

export default function NewResource({ userData }) {
  // state with object containing each bit of information about the new resource that will be sent in the fetch request
  const [newResourceInfo, setResourceInfo] = useState({
    title: "",
    description: "",
    link: "",
    topic: "",
    type: "",
  });

  // function to let you change page - from react router
  const navigate = useNavigate();

  // when button clicked to submit new resource
  const handleClickSubmit = async () => {
    // find today's date using inbuilt function
    let date = new Date();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/resources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // data sent in fetch request is made up of the state, today's date and the auther passed as a prop
          ...newResourceInfo,
          ...{ author: userData.user_id, date_created: date },
        }),
      });
      await response.json();
    } catch (error) {
      console.log(error);
    }
    // move back to learn page when resource creates
    navigate("/learn");
  };

  // function for back button to return to learn page
  function back() {
    navigate("/learn");
  }

  return (
    <div className="page-content">
      {/* back button with arrow image */}
      <div className="back-button">
        <button id="back-btn" onClick={back}>
          <img src={Back} alt="back"></img>
        </button>
      </div>
      {/* main body of page */}
      <div className="new-resource">
        <h1>New Resource</h1>
        {/* form including submit button */}
        <div className="new-resource-submission">
          <input
            type="text"
            placeholder="Title"
            required
            onChange={(e) => {
              // each time input changes update the state object
              setResourceInfo({ ...newResourceInfo, title: e.target.value });
            }}
          ></input>
          <textarea
            type="text"
            placeholder="Description"
            required
            onChange={(e) => {
              setResourceInfo({
                ...newResourceInfo,
                description: e.target.value,
              });
            }}
          ></textarea>
          <input
            type="text"
            placeholder="Link"
            required
            onChange={(e) => {
              setResourceInfo({
                ...newResourceInfo,
                link: e.target.value,
              });
            }}
          ></input>
          {/* dropdown to select the topic of the resource */}
          <select
            placeholder="Topic"
            name="Topic"
            required
            onChange={(e) => {
              setResourceInfo({
                ...newResourceInfo,
                topic: e.target.value,
              });
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
          {/* dropdown to select the type of the resource */}
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
          {/* submit button calls function */}
          <button onClick={handleClickSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
