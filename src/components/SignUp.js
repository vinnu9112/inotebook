import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom';
const SignUp = (props) => {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword:"" });

    // const {name,email, password} = credentials;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert('Account Created Successfully', "success");
        }
        else{
            props.showAlert('Invalid credentials', "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <h2 className="my-3">Sign Up to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">Get Started</button>
            </form>
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title my-2">Already an user?</h5>
                   
                    <Link to="/login" className="btn btn-outline-primary my-2">Click Here</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
