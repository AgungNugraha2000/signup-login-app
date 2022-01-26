import React, { useState } from 'react'
import LoginForm from './LoginForm'
import './Login.css'

function Login() {
    const admin = {
        email: "admin@adm.com",
        password: "admin"
    }
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState()

    const Login = (details) => {
        console.log(details)

        if (details.email == admin.email && details.password == admin.password) {
            console.log('loggin')
            setUser({
                username: details.username,
                email: details.email
            })
        } else {
            console.log('do not match')
            setError('Account do not match')
        }
    }

    const Logout = () => {
        console.log('logged out')
        setUser({
            username: "",
            email: ""
        })
    }

    return (
        <div>
            {(user.email !== "") && (user.password !== "") ? (<div className="content"> <h2>Welcome</h2> <button className="btn-logout" onClick={Logout} >Logout</button> </div>) : <LoginForm Login={Login} error={error} />}
        </div>
    )
}

export default Login;
