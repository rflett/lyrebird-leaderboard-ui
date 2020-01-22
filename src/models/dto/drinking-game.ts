import { DrinkingGameType } from "../enums/drinking-game-type";

export interface DrinkingGameDto {
    drinkingGameText: string;
    gameType: DrinkingGameType;
    diceRollNumber: number;
}
