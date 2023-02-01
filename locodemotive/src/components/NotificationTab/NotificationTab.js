import "./NotificationTab.css";
import Notification from "./Notification/Notification";

// component for holding the notification tab

export default function NotificationTab() {
  return (
    <div className="notification-tab">
      <h1>Notifications</h1>
      <div className="notification-container">
        {/* for each notification use a Notification component */}
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
}
