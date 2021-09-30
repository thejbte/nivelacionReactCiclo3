import React from 'react'
import './login.css'

function Login() {
    return (
        <div>

        <div className="login-container">
            <form className="login-form" name="form">
                <h1 className="login-label">LogIn</h1>

                <input autoComplete="off" type="text" 
                    name="login-email" placeholder="youremail@gmail.com" className="login-email"
                />
                <input  type="password" 
                    name="login-password" placeholder="password" className="login-password"
                />
                <button type="button" class="btn btn-success">SSubmit</button>
               {/*} <button type="submit" className="login-button">SSubmit</button>*/}
            </form>
        </div>
        </div>
    )
}

export default Login
