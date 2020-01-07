import "./GuessItem.scss"
import React from 'react';
import { CorrectGuess, TopTenGuess } from "../../../../models/dto/correct-guess";

interface GuessItemProps {
    guess: CorrectGuess | TopTenGuess,
    hasBeenGuessed: boolean,
}

export default function GuessItem(props: GuessItemProps) {

    function isCorrectGuess(item: CorrectGuess | TopTenGuess): item is CorrectGuess {
        return (item as CorrectGuess).actualPosition != null;
    }

    return (
        <div className="guess-item">
            {
                isCorrectGuess(props.guess) ?
                    (
                        <li className="list-item">
                            <b>{props.guess.actualPosition}</b>. {props.guess.songTitle}
                        </li>
                    ) :
                    (
                        props.guess.songTitle !== "" ?
                            (
                                <li className="list-item not-guessed">
                                    <b>{props.guess.guessedPosition}</b>. {props.guess.songTitle}
                                </li>
                            )
                            : ""
                    )
            }
        </div>
    );
}
