import "./DrinkingGame.scss"
import React from 'react';

interface DrinkingGameProps {
    game: string
}

export default function DrinkingGame(props: DrinkingGameProps) {
    return (
        <div className="drinking-game-popup card">
            {props.game}
        </div>
    );
}
