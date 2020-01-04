import React, { useState } from "react";
import "./Login.scss";
import { Http } from "../../../utilities/http";
import { loginUrl, registerUrl } from "../../../models/constants/urls";
import { LoginUserDto, RegisterUserDto } from "../../../models/dto/user/user";
import { JwtResponseDto } from "../../../models/dto/user/jwt-response";
import { Storage } from "../../../utilities/storage";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    // Check if jwt is present first. if so then redirect to management screen
    if (Storage.jwt !== "") {
        // User already logged in. Redirect to the manage screen
        history.push("/manage");
    }

    async function onLoginClicked(e: React.MouseEvent<HTMLButtonElement>) {
        const clickedButton = e.currentTarget;
        // Check inputs first
        if (username === "" || password === "") {
            // User hasn't filled out all the inputs
            alert("Fill your details in. How am I meant to figure out your login details?");
            return;
        }

        // Log user in
        clickedButton.disabled = true;

        const body: LoginUserDto = {
            username,
            password
        };

        const response = await Http.post<JwtResponseDto>(loginUrl, body);
        clickedButton.disabled = false;

        if (response == null) {
            alert("Couldn't log you in. Check your details");
            return;
        }

        Storage.jwt = response.jwt;

        // User now logged in. Redirect to the manage screen
        history.push("/manage");
    }

    async function onSignupClicked(e: React.MouseEvent<HTMLButtonElement>) {
        const clickedButton = e.currentTarget;

        // Check inputs first
        if (username === "" || password === "") {
            // User hasn't filled out all the inputs
            alert("Fill your details in or how am I meant to sign you up?");
            console.log("WTF");
            return;
        }

        const name = prompt("Enter a name to display on the leaderboard");

        if (name == null || name === "") {
            // User cancelled signup
            return;
        }

        // Otherwise sign them up
        // Disable button first
        clickedButton.disabled = true;

        const body: RegisterUserDto = {
            username,
            password,
            name
        };

        const response = await Http.post<JwtResponseDto>(registerUrl, body);

        clickedButton.disabled = false;

        if (response == null) {
            alert("something went wrong. Please try again");
            return;
        }

        Storage.jwt = response.jwt;
    }

    return (
        <div className="login">
            <div className="login-box card">
                <h2>Login</h2>

                <div id="form-contents">
                    <form>
                        <label htmlFor="username-input">Email</label>
                        <input id="username-input"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <label htmlFor="password-input">Password</label>
                        <input id="password-input" type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <div className="form-buttons">
                            <button id="signup-button" type="button" onClick={onSignupClicked}>Signup</button>
                            <button id="login-button" type="button" onClick={onLoginClicked}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
