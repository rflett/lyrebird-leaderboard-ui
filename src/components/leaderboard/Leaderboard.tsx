import React from 'react';
import "./Leaderboard.scss";
import logo from "./triplej-logo.svg"
import { LeaderboardUser } from "../../models/dto/leaderboard-user";

interface LeaderboardProps {
    users: ReadonlyArray<LeaderboardUser>;
}

export default function Leaderboard(props: LeaderboardProps) {
    return (
        <div className="leaderboard">
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
