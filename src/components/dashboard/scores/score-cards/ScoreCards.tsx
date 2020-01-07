import "./ScoreCards.scss"
import React from 'react';
import UserGuesses from "../user-guesses/UserGuesses";
import { LeaderboardUser } from "../../../../models/dto/leaderboard-user";

interface ScorecardsProps {
    users: ReadonlyArray<LeaderboardUser>
}

export default function Scorecards(props: ScorecardsProps) {
    return (
        <div className="score-cards">
            <div className="user-guesses-container">
                {
                    props.users.map((guesses, i) => <UserGuesses key={i} user={guesses}/>)
                }
            </div>
        </div>
    );
}
