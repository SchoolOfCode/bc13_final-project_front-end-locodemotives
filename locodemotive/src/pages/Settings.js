import { useState } from 'react'
import './Settings.css'

export default function Settings({ userData }) {

    const [currentTab, setCurrentTab] = useState("")

    return (
        <div className='settings-page'>
            <h1 id='settings'>Settings</h1>
            <div className='settings-menu'>
                <div className='settings-navbar'>
                    <ul>
                        <li><button className='general-btn' onClick={() => setCurrentTab("general")}>General</button></li>
                        <li><button className='account-btn' onClick={() => setCurrentTab("account")}>Account</button></li>
                    </ul>
                </div>
                {currentTab === "general" && <div className='settings-general-content'>
                    <h1>General</h1>
                    <div className='display-container'>
                        <h2>Display</h2>
                        <div className='theme-selector'>
                            <label>Theme: </label><select>
                                <option>Light</option>
                                <option>Dark</option>
                            </select>
                        </div>
                    </div>
                    <div className='notification-container'>
                        <h2>Notifications</h2>
                        <div className='checkboxes'>
                            <div className='checkbox-set-one'>
                                <label>Enable post notifications
                                    <input type="checkbox"></input>
                                    <span className='checkbox'></span>
                                </label>
                            </div>
                            <div className='checkbox-set-two'>
                                <label>Enable email notifications
                                    <input type="checkbox"></input>
                                    <span className='checkbox'></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>}
                {currentTab === "account" && <div className='settings-account-content'>
                    <h1>Account</h1>
                    <div className='account-settings'>
                        <p>yourname@email.com</p>
                        <p>************</p>
                    </div>
                    <div className='profile-settings'>
                        <img src={userData.image_url} alt="pfp"></img>
                        <button>Change Profile Picture</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}