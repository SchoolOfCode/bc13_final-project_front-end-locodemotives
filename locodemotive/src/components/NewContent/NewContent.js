import "./NewContent.css";

// component to display one of the three most recent resources for your team/topic
// styling matches the resources on the learn page - no topic as all the same to match your team
// props bring in info to be displayed for each

export default function NewContent({ title, description, link }) {
  return (
    <div className="new-content">
      <h1>{title}</h1>
      <p>{description}</p>
      {/* link around the access button to taked you to linked resource on new page */}
      <a href={`${link}`} target="_blank" rel="noreferrer">
        <button>Access &gt;</button>
      </a>
    </div>
  );
}
