import React, { useState } from 'react'
import './LoginForm.css'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        Login(details)
    }

    return (
        <div className="container">
            <div className="form-group">
                <h1>Login</h1>
                {(error !== "") ? (<h2>{error}</h2>) : ""}
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label id="username"><b>Username</b></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="off"
                            onChange={e => setDetails({ ...details, username: e.target.value })}
                            value={details.username}
                        />
                    </div>
                    <div className="form">
                        <label id="email"><b>Email</b></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            value={details.email}
                        />
                    </div>
                    <div className="form">
                        <label id="password"><b>Password</b></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}
                        />
                    </div>
                    <button className="btn-login">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;