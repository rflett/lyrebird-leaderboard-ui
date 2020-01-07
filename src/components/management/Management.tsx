import React, { useState } from "react";
import "./Management.scss";
import tripleJLogo from "./triplej-logo.svg"
import Header from "../shared/header/Header";
import { Page } from "../../models/enums/page";
import GuessInput from "./guess-input/GuessInput";
import { ManagementTab } from "../../models/enums/management-tab";
import PictureInput from "./picture-input/PictureInput";


export default function Management() {
    const [selectedTab, setSelectedTab] = useState(ManagementTab.song);

    function onTabClicked(tab: ManagementTab) {
        setSelectedTab(tab);
    }

    function getTabHeader() {
        switch (selectedTab) {
            case ManagementTab.song:
                return (
                    <div>
                        <h2>Enter your top 10</h2>
                        <h2>(Song name only)</h2>
                    </div>
                );
            case ManagementTab.picture:
                return (
                    <div>
                        <h2>Select a picture</h2>
                        <h2>This will appear with your score</h2>
                    </div>
                );
        }
    }

    return (
        <div className="management">
            <Header page={Page.manage}/>
            <div className="page-content">
                <div className="management-wrapper card">
                    <div className="tab-container">
                        <div className={`tab ${selectedTab === ManagementTab.song ? "selected" : ""}`}
                             onClick={() => onTabClicked(ManagementTab.song)}>
                            Songs
                        </div>
                        <div className={`tab ${selectedTab === ManagementTab.picture ? "selected" : ""}`}
                             onClick={() => onTabClicked(ManagementTab.picture)}>
                            Picture
                        </div>
                    </div>
                    <div className="header wrapper-padding">
                        <img src={tripleJLogo} alt="JJJ-Logo"/>
                        {getTabHeader()}
                    </div>
                    <div className="card-content">
                        {selectedTab === ManagementTab.song ?
                            (<GuessInput/>) :
                            (<PictureInput/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
