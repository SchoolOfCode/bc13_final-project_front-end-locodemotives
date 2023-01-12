import './NotificationTab.css';
import Notification from "./Notification/Notification";

export default function NotificationTab() {
    return (
        <div className="notification-tab">
            <h1>Notifications</h1>
            <div className='notification-container'>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </div>
        </div>
    )
}