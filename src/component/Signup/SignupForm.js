import React, { useEffect, useState } from 'react'
import Validation from './Validation'
import './SignupForm.css'

function SignupForm() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password1: ""
    })
    const [errors, setErrors] = useState({})
    const [dataMatches, setDataMatches] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataMatches) {
            submitForm(true)
        }
    }, [errors])

    const submitForm = () => {
        setIsSubmit(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(values))
        setDataMatches(true)
    }

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
        console.log(values)
    }

    return (
        <div className="container">
            <div className="form-group">
                <h1>Sign Up</h1>
                {isSubmit ? (<h2 className="notif">Sign up is Successfully</h2>) : (<div></div>)}
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label id="username"><b>Username</b></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={values.username}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.username && <p className="atten">{errors.username}</p>}
                    <div className="form">
                        <label id="email"><b>Email</b></label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={values.email}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="atten">{errors.email}</p>}
                    <div className="form">
                        <label id="password"><b>Password</b></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <p className="atten">{errors.password}</p>}
                    <div className="form">
                        <label id="password1"><b>Confirm Password</b></label>
                        <input
                            type="password"
                            name="password1"
                            id="password1"
                            value={values.password1}
                            onChange={handleChange}
                        />
                        {errors.password1 && <p className="atten">{errors.password1}</p>}
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;