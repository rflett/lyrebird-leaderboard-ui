import { CorrectGuess, TopTenGuess } from "./correct-guess";

export interface LeaderboardUser {
    name: string;
    score: number;
    correctGuesses: CorrectGuess[];
    topTenGuesses: TopTenGuess[];
}
