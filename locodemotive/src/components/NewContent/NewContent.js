import "./NewContent.css";

export default function NewContent({ title, description, link }) {
  return (
    <div className="new-content">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={`${link}`} target="_blank">
        <button>Access &gt;</button>
      </a>
    </div>
  );
}
