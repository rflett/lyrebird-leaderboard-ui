import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Scorecards from "./dashboard/scores/score-cards/ScoreCards";
import { testLeaders, testUsers } from "../models/dto/test-data";
import Login from "./login/login/Login";
import LatestSongs from "./dashboard/latest-songs/LatestSongs";
import DrinkingGame from "./shared/drinking-game/DrinkingGame";
import { WebsocketService } from "../services/websocket-service";
import Header from "./shared/header/Header";
import { Page } from "../models/enums/page";
import Management from "./management/Management";
import { Http } from "../utilities/http";
import { songUrl } from "../models/constants/urls";
import { PlayedSong } from "../models/dto/played-song";

const App: React.FC = () => {
    const [users, setUsers] = useState(testUsers);
    const [songs, setSongs] = useState([] as ReadonlyArray<PlayedSong>);
    const [drinkingGame, setDrinkingGame] = useState("Drink Quickly");

    useEffect(() => {
        loadPageData();
    }, []);

    const webSockets = new WebsocketService();
    webSockets.leaderboardChangeUpdate.subscribe(() => {
        requestSonglist();
    });
    webSockets.drinkingGameUpdate.subscribe(val => setDrinkingGame(val));

    /** Requests the 10 last played songs */
    async function requestSonglist() {
        let songs = await Http.get<PlayedSong[]>(songUrl);

        if (songs == null) {
            songs = [];
        }

        setSongs(songs);
    }

    async function loadPageData() {
        requestSonglist();
    }

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/manage">
                    <Management/>
                </Route>
                <Route path="/">
                    <div className="App">
                        <div className="content">
                            <div className="grid-item header-container">
                                <Header page={Page.dashboard}/>
                            </div>
                            <div className="grid-item user-container">
                                <Scorecards users={users}/>
                                <DrinkingGame game={drinkingGame}/>
                            </div>
                            <div className="grid-item latest-songs-container">
                                <LatestSongs songs={songs}/>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
