import React, { useState } from 'react';
import "./LatestSongs.scss";
import logo from "./triplej-logo.svg"
import { PlayedSong } from "../../../models/dto/played-song";
import FlipMove from "react-flip-move";

interface LatestSongsProps {
    songs: ReadonlyArray<PlayedSong>;
}

export default function LatestSongs(props: LatestSongsProps) {
    return (
        <div className="latest-songs">
            <div className="header"><img src={logo} alt="JJJ-Logo"/>Latest Songs</div>
            <div className="latest-songs-list">
                {
                    props.songs.map((song, i) =>
                        <div className={`song-item`} key={i}>
                            <div className="song-text"><b>{song.position}.</b> {song.songName}</div>
                            <div className="divider"></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
