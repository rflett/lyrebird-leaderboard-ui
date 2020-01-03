import React from "react";
import "./Login.scss";

export default function Login() {
    return (
        <div className="login">
            <div className="login-box card">
                <h2>Login</h2>

                <div id="form-contents">
                    <form>
                        <label htmlFor="username-input">Email</label>
                        <input id="username-input"/>
                        <label htmlFor="password-input">Password</label>
                        <input id="password-input" type="password"/>
                        <div className="form-buttons">
                            <button id="signup-button" type="button">Signup</button>
                            <button id="login-button" type="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
