import "./WhatsNew.css";

export default function WhatsNew({ title, description, link }) {
  return (
    <div className="new-content">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={`${link}`} target="_blank" rel="noreferrer">
        <button>Access &gt;</button>
      </a>
    </div>
  );
}
