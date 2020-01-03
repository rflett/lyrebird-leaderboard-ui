import "./GuessItem.scss"
import React from 'react';
import { CorrectGuess } from "../../../models/correct-guess";

interface GuessItemProps {
    guess: CorrectGuess
}

export default function GuessItem(props: GuessItemProps) {
    return (
        <li className="guess-item">
            <b>{props.guess.position}</b>. {props.guess.title} - {props.guess.artist}
        </li>
    );
}
