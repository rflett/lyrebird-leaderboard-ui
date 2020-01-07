import "./ScoreCards.scss"
import React from 'react';
import UserGuesses from "../user-guesses/UserGuesses";
import { ScorecardUser } from "../../../../models/dto/scorecard-user";
import Header from "../../../shared/header/Header";

interface ScorecardsProps {
    users: ReadonlyArray<ScorecardUser>
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
