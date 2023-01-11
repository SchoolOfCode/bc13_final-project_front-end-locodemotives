import './Login.css'
import Logo from './Content/Logo.png'
import { useState } from 'react'

export default function Login({ login }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div className='content'>
            <div className='login-container'>
                <div className='logo-container'>
                    <img src={Logo} alt="Locodemotive Icon"></img>
                </div>
                <div className='login-form-container'>
                    <input type="email" placeholder='Email' onChange={handleEmailChange}></input>
                    <input type="password" placeholder='Password' onChange={handlePasswordChange}></input>
                    <button onClick={() => login(email, password)}>Login</button>
                </div>
            </div>
        </div>
    )
}