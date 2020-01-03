import "./ScoreCards.scss"
import React from 'react';
import { ScorecardUser } from "../../../models/scorecard-user";
import UserGuesses from "../user-guesses/UserGuesses";
import Header from "../../header/Header";

interface ScorecardsProps {
    users: ReadonlyArray<ScorecardUser>
}

export default function Scorecards(props: ScorecardsProps) {
    return (
        <div className="score-cards">
            <Header/>
            <div className="user-guesses-container">
                {
                    props.users.map((guesses, i) => <UserGuesses key={i} user={guesses}/>)
                }
            </div>
        </div>
    );
}
