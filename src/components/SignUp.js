import React from "react";
import '../style/login.css';

const SignUp = () => (
    <div id="login">
        <div className="container">
            <div className="login-box">
                <h3 className="text-center text-dark">Sign Up</h3>

                <div className="form-group">
                    <label htmlFor="username" className="text-dark">Email:</label><br/>
                    <input type="text" name="email" id="username" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="text-dark">Password:</label><br/>
                    <input type="password" name="password" id="password" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="text-dark">Confirm Password:</label><br/>
                    <input type="password" name="password" id="password" className="form-control"/>
                </div>

                <div className="form-group">
                    <div className="text-center">
                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Sign Up"/>
                    </div>
                </div>

                <div id="register-link" className="text-center">
                    <a href="/login" className="text-info">Already a member?</a>
                </div>

            </div>         

        </div>
    </div>
);

export default SignUp;