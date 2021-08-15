import React from "react";
import '../style/login.css';

const Login = () => (
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div class="login-box">
                <h3 class="text-center text-dark">Login</h3>

                <div class="form-group">
                    <label for="username" class="text-dark">Username:</label><br/>
                    <input type="text" name="username" id="username" class="form-control"/>
                </div>

                <div class="form-group">
                    <label for="password" class="text-dark">Password:</label><br/>
                    <input type="text" name="password" id="password" class="form-control"/>
                </div>

                <div class="form-group">
                    <label for="remember-me" class="text-dark"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
                    <div class="text-center">
                        <input type="submit" name="submit" class="btn btn-info btn-md" value="Login"/>
                    </div>
                </div>

                <div id="register-link" class="text-center">
                    <a href="#" class="text-info">Not a member yet?</a>
                </div>

            </div>         

        </div>
    </div>
);

export default Login;