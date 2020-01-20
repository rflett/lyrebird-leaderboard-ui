import { CorrectGuess, TopTenGuess } from "./correct-guess";

export interface LeaderboardUser {
    name: string;
    score: number;
    icon: number;
    correctGuesses: CorrectGuess[];
    topTenGuesses: TopTenGuess[];
}
