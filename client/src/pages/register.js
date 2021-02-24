import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

function Register() {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} noValidate>
                <h1>Register</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username..."
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Email"
                    placeholder="Email..."
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Password"
                    placeholder="Password..."
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <Form.Input
                    label="Confirm Password"
                    placeholder="Confirm Password..."
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                />

                <Button type="submit" primary>Register</Button>
            </Form>
        </div>
    )
}

export default Register;
