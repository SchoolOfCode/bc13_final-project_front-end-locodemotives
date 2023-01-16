import "./LearnTopic.css";

export default function LearnTopic({ resourceData }) {
  return (
    <div className="learnTopic-topic-container">
      <div className="topic-type">
        <h1>{resourceData.type}</h1>
      </div>
      <div className="topic-body">
        <div className="topic-body-info">
          <h1>{resourceData.title}</h1>
          <div className="topic-description">
            <p>{resourceData.description}</p>
          </div>
          <a href={resourceData.link} target="_blank" rel="noreferrer">
            <button>Access &gt;</button>
          </a>
        </div>
      </div>
    </div>
  );
}
