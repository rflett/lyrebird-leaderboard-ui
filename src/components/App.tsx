import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './App.scss';
import Leaderboard from "./leaderboard/Leaderboard";
import Scorecards from "./scores/score-cards/ScoreCards";
import { testLeaders, testUsers } from "../models/dto/test-data";
import Login from "./management/login/Login";
import GuessInput from "./management/guess-input/GuessInput";

const App: React.FC = () => {
        const [users, setUsers] = useState(testUsers);
        const [leaders, setLeaders] = useState(testLeaders);

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
