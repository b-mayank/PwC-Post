import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
    };

    const submitAppUser = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary">Register</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            onChange={handleAppUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            onChange={handleAppUser}
                            required
                        />
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Register"
                            onClick={submitAppUser}
                        />
                    </div>
                </form>
                <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link>
            </div>
        </div >
    )
}
export default Register;