import React from "react";
import '../style/login.css';

const Login = () => (
    <div id="login">
        <div className="container">
            <div className="login-box">
                <h3 className="text-center text-dark">Login</h3>

                <div className="form-group">
                    <label htmlFor="username" className="text-dark">Email:</label><br/>
                    <input type="text" name="username" id="username" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="text-dark">Password:</label><br/>
                    <input type="password" name="password" id="password" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="remember-me" className="text-dark"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
                    <div className="text-center">
                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Login"/>
                    </div>
                </div>

                <div id="register-link" className="text-center">
                    <a href="/signup" className="text-info">Not a member yet?</a>
                </div>

            </div>         

        </div>
    </div>
);

export default Login;