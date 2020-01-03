import React, { useState } from 'react';
import './App.scss';
import Leaderboard from "./leaderboard/Leaderboard";
import Scorecards from "./scores/score-cards/ScoreCards";
import { testLeaders, testUsers } from "../models/test-data";

const App: React.FC = () => {
        const [count, setCount] = useState(0);
        const [users, setUsers] = useState(testUsers);
        const [leaders, setLeaders] = useState(testLeaders);

        return (
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
        );
    }
;

export default App;
