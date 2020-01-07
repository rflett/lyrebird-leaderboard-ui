import React from "react";
import "./PictureInput.scss";


export default function PictureInput() {

    return (
        <div className="picture-input">
            <div className="picture-flex">
                <div className="picture card"></div>
                <div className="picture card"></div>
                <div className="picture card"></div>
                <div className="picture card"></div>
                <div className="picture card"></div>
                <div className="picture card"></div>
                <div className="picture card"></div>
            </div>
            <button className="save-button">Save</button>
        </div>
    );
}
