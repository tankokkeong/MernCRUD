import React, { useState } from "react";
import '../style/login.css';

function getData(val){
    console.log(val.target.value)
}


const SignUp = () => {
    
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (e) => {

        //Prevent auto refresh
        e.preventDefault();

        const user = {email, username, password};
    }

    return(
    <div id="login">
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="login-box">
                    <h3 className="text-center text-dark">Sign Up</h3>

                    <div className="form-group">
                        <label htmlFor="email" className="text-dark">Email:</label><br/>
                        <input type="text" name="email" id="username" className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" className="text-dark">Username:</label><br/>
                        <input type="text" name="email" id="username" className="form-control"
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="text-dark">Password:</label><br/>
                        <input type="password" name="password" id="password" className="form-control"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="text-dark">Confirm Password:</label><br/>
                        <input type="password" name="password" id="password" className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
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
        </form>
        
    </div>
    );
};

export default SignUp;