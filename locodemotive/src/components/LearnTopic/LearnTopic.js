import "./LearnTopic.css";

export default function LearnTopic({ resourceData }) {
  return (
    <div className="topic-container">
      <div className="topic-type">
        <h1>{resourceData.type}</h1>
      </div>
      <div className="topic-body">
        <h1>{resourceData.title}</h1>
        <p>{resourceData.description}</p>
      </div>
    </div>
  );
}
