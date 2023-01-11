import "./NewContent.css";

export default function NewContent({ title, description }) {
  return (
    <div className="new-content">
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Access</button>
    </div>
  );
}
