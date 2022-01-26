const Validation = (values) => {
    let errors = {}

    if (!values.username) {
        errors.username = "Username is required"
    }

    if (!values.email) {
        errors.email = "Email is requuired"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Format email is invalid"
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters"
    }

    if (!values.password1) {
        errors.password1 = "Confirm password is required"
    } else if (values.password1 !== values.password) {
        errors.password1 = "Password not matches"
    }

    return errors
}

export default Validation;