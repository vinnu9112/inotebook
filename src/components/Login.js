import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Login = (props) => {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert('Logged In Successfully', "success");
            navigate("/");
        }
        else {
            props.showAlert('Inavlid Credentials', 'danger');
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 className="my-3">Login to Continue with iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title my-2">Don't have an account?</h5>
                   
                    <Link to="/signup" className="btn btn-primary my-2">Click Here</Link>
                </div>
            </div>
        </>
    )
}

export default Login
