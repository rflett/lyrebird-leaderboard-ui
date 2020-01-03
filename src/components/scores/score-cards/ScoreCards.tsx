import "./ScoreCards.scss"
import React from 'react';
import { ScorecardUser } from "../../../models/scorecard-user";
import UserGuesses from "../user-guesses/UserGuesses";

interface ScorecardsProps {
    users: ReadonlyArray<ScorecardUser>
}

export default function Scorecards(props: ScorecardsProps) {
    return (
        <div className="score-cards">
            {
                props.users.map((guesses, i) => <UserGuesses key={i} user={guesses}/>)
            }
        </div>
    );
}
