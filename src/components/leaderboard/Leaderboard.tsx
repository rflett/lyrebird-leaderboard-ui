import React from 'react';
import "./Leaderboard.scss";
import logo from "./triplej-logo.svg"
import { LeaderboardUser } from "../../models/leaderboard-user";

interface LeaderboardProps {
    users: ReadonlyArray<LeaderboardUser>;
}

function Leaderboard(props: LeaderboardProps) {
    return (
        <div className="leaderboard card">
            <div className="header"><img src={logo}/>Leaderboard</div>
            <div className="leaderboard-list">
                <ol>
                    {
                        props.users.map((user, i) => <li key={i}><span>{user.name} - {user.score}pts</span></li>)
                    }
                </ol>
            </div>
        </div>
    );
}

export default Leaderboard;
