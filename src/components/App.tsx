import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import Scorecards from "./dashboard/scores/score-cards/ScoreCards";
import { testLeaders, testUsers } from "../models/dto/test-data";
import Login from "./login/login/Login";
import GuessInput from "./management/guess-input/GuessInput";
import Leaderboard from "./dashboard/leaderboard/Leaderboard";
import DrinkingGame from "./shared/drinking-game/DrinkingGame";
import io from 'socket.io-client';

const App: React.FC = () => {
        const [users, setUsers] = useState(testUsers);
        const [leaders, setLeaders] = useState(testLeaders);
        const [drinkingGame, setDrinkingGame] = useState("Drink Quickly");

        const socket = io('http://localhost:4001');

        socket.on("drinking-game", (data: string) => setDrinkingGame(data));

        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/manage">
                        <GuessInput/>
                    </Route>
                    <Route path="/">

                        <DrinkingGame game={drinkingGame}/>
                        <div className="App">
                            <div className="content">
                                <div className="grid-item user-container">
                                    <Scorecards users={users}/>
                                </div>
                                <div className="grid-item leaderboard-container">
                                    <Leaderboard users={leaders}/>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
;

export default App;
