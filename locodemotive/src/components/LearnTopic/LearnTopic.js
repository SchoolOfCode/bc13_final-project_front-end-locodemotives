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
          <p>{resourceData.description}</p>
        </div>
        <a href={resourceData.link}>
          <button>Access &gt;</button>
        </a>
      </div>
    </div>
  );
}
