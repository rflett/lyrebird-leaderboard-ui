import "./UserGuesses.scss"
import React from 'react';
import GuessItem from "../guess-item/GuessItem";
import { LeaderboardUser } from "../../../../models/dto/leaderboard-user";
import { baseImageUrl, imageFileExt } from "../../../../models/constants/urls";

interface UserGuessesProps {
    user: LeaderboardUser
}

export default function UserGuesses(props: UserGuessesProps) {
    return (
        <div className="user-guesses card">
            <img className="guess-background" src={`${baseImageUrl}/${props.user.icon}.${imageFileExt}`}
                 alt="Background"/>
            <div className="guess-contents">
                <h2>{props.user.name} - {props.user.score ?? 0}pts</h2>
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


