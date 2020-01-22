import "./DrinkingGame.scss"
import React, { useEffect, useState } from 'react';
import { DrinkingGameDto } from "../../../models/dto/drinking-game";
import { DrinkingGameType } from "../../../models/enums/drinking-game-type";

interface DrinkingGameProps {
    game: DrinkingGameDto
}

export default function DrinkingGame(props: DrinkingGameProps) {
    let [gameText, setGameText] = useState("");
    useEffect(() => {
        if (props.game.gameType === DrinkingGameType.dice) {
            cycleDice(30);
        } else {
            setGameText(props.game.drinkingGameText);
        }
    }, []);

    /** Performs a fake "dice roll" for the given number of loops, with the given wait between each refresh */
    function cycleDice(changesLeft: number, timeBetweenChanges: number = 80) {
        let nextChanges = changesLeft - 1;

        const randomNumber = Math.floor(Math.random() * 11) + 1;

        setGameText(props.game.drinkingGameText.replace("{dice_roll}", randomNumber.toString()));
        if (changesLeft !== 0) {
            setTimeout(() => cycleDice(nextChanges, timeBetweenChanges), timeBetweenChanges);
        }
    }

    return (
        <div className="drinking-game-popup card">
            <h3>Drink Up!</h3>
            <span>{gameText}</span>
        </div>
    );
}
