import './Settings.css'

export default function Settings() {
    return (
        <div className='settings-page'>
            <h1>Settings</h1>
            <div className='settings-menu'>
                <div className='settings-navbar'>
                    <ul>
                        <li><button>General</button></li>
                        <li><button>Account</button></li>
                    </ul>
                </div>
                <div className='settings-general-content'>
                    <h1>General</h1>
                    <div className='display-container'>
                        <h2>Display</h2>
                        <label>Theme: </label><select>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </div>
                    <div className='notification-container'>
                        <h2>Notifications</h2>
                        <input type="checkbox"></input><label>Enable post notifications</label>
                        <input type="checkbox"></input><label>Enable email notifications</label>
                    </div>
                </div>
                <div className='settings-account-content'>
                    <h1>Account</h1>
                    <div className='account-settings'>
                        <p>yourname@email.com</p>
                        <p>************</p>
                    </div>
                    <div className='profile-settings'>
                        <img src="" alt="pfp"></img>
                        <button>Change Profile Picture</button>
                    </div>
                </div>
            </div>
        </div>
    )
}