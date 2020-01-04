import React, { useEffect, useState } from "react";
import "./GuessInput.scss";
import tripleJLogo from "./triplej-logo.svg"
import { useHistory } from "react-router-dom";
import { Storage } from "../../../utilities/storage";
import { GuessDto } from "../../../models/dto/guess";
import { Http } from "../../../utilities/http";
import { guessUrl } from "../../../models/constants/urls";


export default function GuessInput() {
    const [guesses, setGuesses] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const history = useHistory();

    useEffect(() => {
        // Runs only once on component mount
        retrieveExistingChoices();
    }, []);

    if (Storage.jwt === "") {
        // User isn't logged in. Redirect to the login screen
        history.push("/login");
    }

    function onChoiceChange(value: string, index: number) {
        // Replace the array
        guesses[index] = value;
        const newChoices = [...guesses.slice(0, index), ...guesses.slice(index, guesses.length)];
        setGuesses(newChoices);
    }

    async function onSaveClicked() {
        const body: GuessDto = {
            guesses
        };

        await Http.post(guessUrl, body, Storage.jwt);
    }

    async function retrieveExistingChoices() {
        const existingChoices = await Http.get<GuessDto>(guessUrl, Storage.jwt);

        if (existingChoices == null) {
            // Something went wrong retrieving the choices
            return;
        }

        setGuesses(existingChoices.guesses);
    }

    return (
        <div className="guess-input">
            <div className="input-wrapper card">
                <div className="header wrapper-padding">
                    <img src={tripleJLogo}/>
                    <h2>Enter your top 10</h2>
                    <h2>(Song name only)</h2>
                </div>
                <div className="wrapper-padding">
                    <form>
                        <input placeholder="Your choice for #1"
                               value={guesses[0]}
                               onChange={(e) => onChoiceChange(e.target.value, 0)}/>
                        <input placeholder="Your choice for #2"
                               value={guesses[1]}
                               onChange={(e) => onChoiceChange(e.target.value, 1)}/>
                        <input placeholder="Your choice for #3"
                               value={guesses[2]}
                               onChange={(e) => onChoiceChange(e.target.value, 2)}/>
                        <input placeholder="Your choice for #4"
                               value={guesses[3]}
                               onChange={(e) => onChoiceChange(e.target.value, 3)}/>
                        <input placeholder="Your choice for #5"
                               value={guesses[4]}
                               onChange={(e) => onChoiceChange(e.target.value, 4)}/>
                        <input placeholder="Your choice for #6"
                               value={guesses[5]}
                               onChange={(e) => onChoiceChange(e.target.value, 5)}/>
                        <input placeholder="Your choice for #7"
                               value={guesses[6]}
                               onChange={(e) => onChoiceChange(e.target.value, 6)}/>
                        <input placeholder="Your choice for #8"
                               value={guesses[7]}
                               onChange={(e) => onChoiceChange(e.target.value, 7)}/>
                        <input placeholder="Your choice for #9"
                               value={guesses[8]}
                               onChange={(e) => onChoiceChange(e.target.value, 8)}/>
                        <input placeholder="Your choice for #10"
                               value={guesses[9]}
                               onChange={(e) => onChoiceChange(e.target.value, 9)}/>
                        <button type="button" onClick={onSaveClicked}>Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
