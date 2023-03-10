import Pluralsight from "./Images/Pluralsight.png";
import Sharepoint from "./Images/Sharepoint.png";
import Resonate from "./Images/ResonateWhite.png";
import "./MyChannels.css";

// html for external channels on home page
// each link <a></a> is around a <div> including image <img> and text <h2> component
// target="_blank" means link opens on new page

export default function MyChannels() {
  return (
    <div className="channel-container">
      {/* pluralsight */}
      <a href="https://app.pluralsight.com/id" target="_blank" rel="noreferrer">
        <div id="pluralsight-channel" className="channel">
          <img src={Pluralsight} alt="Pluralsight"></img>
          <h2>Pluralsight</h2>
        </div>
      </a>
      {/* sharepoint */}
      <a
        href="https://www.microsoft.com/en-gb/microsoft-365/sharepoint/collaboration"
        target="_blank"
        rel="noreferrer"
      >
        <div id="sharepoint-channel" className="channel">
          <img src={Sharepoint} alt="Sharepoint"></img>
          <h2>Sharepoint</h2>
        </div>
      </a>
      {/* resonate website */}
      <a
        href="https://www.resonate.tech/ui/content/content.aspx?id=7"
        target="_blank"
        rel="noreferrer"
      >
        <div id="resonate-channel" className="channel">
          <img src={Resonate} alt="Resonate"></img>
          <h2>Resonate</h2>
        </div>
      </a>
    </div>
  );
}
