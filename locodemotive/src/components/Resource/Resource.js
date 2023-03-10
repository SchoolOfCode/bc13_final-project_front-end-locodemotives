import "./Resource.css";

export default function Resource({ resourceData }) {
  return (
    <div className="resource-container">
      <a href={resourceData.link} target="_blank" rel="noreferrer">
      <div className="learnTopic-topic-container">
        <div className="topic-body">
          <div className="topic-body-info">
            <h1>{resourceData.title}</h1>
            <div className="topic-type">
              <h1>{resourceData.type}</h1>
            </div>
            <div className="topic-description">
              <p>{resourceData.description}</p>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
}
