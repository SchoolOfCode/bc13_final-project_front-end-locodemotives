import './Login.css'
import Logo from './Content/Logo.png'

export default function Login({ login, logout }) {

    return (
        <div className='content'>
            <div className='login-container'>
                <div className='logo-container'>
                    <img src={Logo} alt="Locodemotive Icon"></img>
                </div>
                <div className='login-form-container'>
                    <input type="email" placeholder='Email'></input>
                    <input type="password" placeholder='Password'></input>
                    <button onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}