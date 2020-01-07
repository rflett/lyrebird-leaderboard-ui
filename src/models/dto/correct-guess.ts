export interface TopTenGuess {
    songTitle: string;
    guessedPosition: number;
}

export interface CorrectGuess extends TopTenGuess {
    actualPosition: number;
}
