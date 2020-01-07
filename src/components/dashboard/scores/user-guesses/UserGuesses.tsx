import "./UserGuesses.scss"
import React from 'react';
import GuessItem from "../guess-item/GuessItem";
import drum from "../../latest-songs/triplej-logo.svg";
import { LeaderboardUser } from "../../../../models/dto/leaderboard-user";

interface UserGuessesProps {
    user: LeaderboardUser
}

export default function UserGuesses(props: UserGuessesProps) {
    return (
        <div className="user-guesses card">
            <img className="guess-background" src={drum} alt="Background"/>
            <div className="guess-contents">
                <h2>{props.user.name} - {props.user.score}pts</h2>
                <ul>
                    {/*Correct guesses first*/}
                    {
                        props.user.correctGuesses.map((guess, i) => (
                            <GuessItem key={i}
                                       hasBeenGuessed={true}
                                       guess={guess}/>
                        ))
                    }
                    {/*Then guesses still to come*/}
                    {
                        props.user.topTenGuesses.map((guess, i) => (
                            <GuessItem key={i}
                                       hasBeenGuessed={true}
                                       guess={guess}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}


