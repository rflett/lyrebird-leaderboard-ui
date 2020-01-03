import { CorrectGuess } from "./correct-guess";

export interface ScorecardUser {
    name: string;
    correctGuesses: ReadonlyArray<CorrectGuess>;
}
