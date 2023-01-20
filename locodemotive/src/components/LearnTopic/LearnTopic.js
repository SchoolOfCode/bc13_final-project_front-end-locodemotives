import "./LearnTopic.css";

// component for each resource displayed on the learn page
// all the data for the resource passed in as props

export default function LearnTopic({ resourceData }) {
  return (
    // whole card with heading bar and main body
    <div className="learnTopic-topic-container">
      {/* heading with topic */}
      <div className="topic-type">
        <h1>{resourceData.type}</h1>
      </div>
      {/* main body of resource card */}
      <div className="topic-body">
        <div className="topic-body-info">
          <h1>{resourceData.title}</h1>
          <div className="topic-description">
            <p>{resourceData.description}</p>
          </div>
          {/* link around access button opens the resource on a new page using link property*/}
          <a href={resourceData.link} target="_blank" rel="noreferrer">
            <button>Access &gt;</button>
          </a>
        </div>
      </div>
    </div>
  );
}
