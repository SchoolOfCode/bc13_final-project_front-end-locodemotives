import Pluralsight from "./Images/Pluralsight.png";
import Sharepoint from "./Images/Sharepoint.png";
import Resonate from "./Images/ResonateWhite.png";
import "./ChannelContent.css";

export default function ChannelContent() {
  return (
    <div className="channel-container">
      <a href="https://app.pluralsight.com/id">
        <div id="pluralsight-channel" className="channel">
          <img src={Pluralsight} alt="Pluralsight"></img>
          <h2>Pluralsight</h2>
        </div>
      </a>
      <a href="https://www.microsoft.com/en-gb/microsoft-365/sharepoint/collaboration">
        <div id="sharepoint-channel" className="channel">
          <img src={Sharepoint} alt="Sharepoint"></img>
          <h2>Sharepoint</h2>
        </div>
      </a>
      <a href="https://www.resonate.tech/ui/content/content.aspx?id=7">
        <div id="resonate-channel" className="channel">
          <img src={Resonate} alt="Resonate"></img>
          <h2>Resonate</h2>
        </div>
      </a>
    </div>
  );
}
