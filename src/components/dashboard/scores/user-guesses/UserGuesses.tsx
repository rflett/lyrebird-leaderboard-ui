import "./UserGuesses.scss"
import React from 'react';
import GuessItem from "../guess-item/GuessItem";
import { ScorecardUser } from "../../../../models/dto/scorecard-user";
import drum from "../../latest-songs/triplej-logo.svg";

interface UserGuessesProps {
    user: ScorecardUser
}

export default function UserGuesses(props: UserGuessesProps) {
    return (
        <div className="user-guesses card">
            <img className="guess-background" src={drum} alt="Background"/>
            <div className="guess-contents">
                <h2>{props.user.name} - 225pts</h2>
                {props.user.correctGuesses.length > 0 ?
                    (
                        <ul>
                            {
                                props.user.correctGuesses.map((guess, i) => <GuessItem key={i} guess={guess}/>)
                            }
                        </ul>
                    ) :
                    (
                        <div className="empty-guess-div">
                            This person doesn't have any correct guesses. Either the game has just started or they're
                            terrible at this.
                        </div>
                    )
                }
            </div>
        </div>
    );
}


