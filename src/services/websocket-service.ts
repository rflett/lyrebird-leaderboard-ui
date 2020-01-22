import { Observable, Observer } from "rxjs";
import io from "socket.io-client";
import { DrinkingGameDto } from "../models/dto/drinking-game";

export class WebsocketService {
    private drinkingGameObserver!: Observer<DrinkingGameDto>;
    public drinkingGameUpdate: Observable<DrinkingGameDto>;

    private leaderboardChangeObserver!: Observer<void>;
    public leaderboardChangeUpdate: Observable<void>;

    constructor() {
        this.drinkingGameUpdate = new Observable<DrinkingGameDto>(o => this.drinkingGameObserver = o);
        this.leaderboardChangeUpdate = new Observable<void>(o => this.leaderboardChangeObserver = o);

        // Connect to the websocket
        const socket = io(process.env.REACT_APP_WEBSOCKET_URL as string);

        // Subscribe to the websocket messages and emit when received
        socket.on("drinking-game", (data: DrinkingGameDto) => this.drinkingGameObserver.next(data));
        socket.on("data-update", (data: string) => this.leaderboardChangeObserver.next());
    }
}
