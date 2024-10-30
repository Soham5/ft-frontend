import React, {useState} from "react"
import './Login.css'

export const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form">
            <form className="login" onSubmit={handleSubmit}>
                <label>Email ID</label>
                <input name="email" id="email" placeholder="abc@xyz.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input name="password" id="password" placeholder="*******" type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                <button className="action-btn" type="submit">Login</button>
            </form>
        </div>
        
    )
}