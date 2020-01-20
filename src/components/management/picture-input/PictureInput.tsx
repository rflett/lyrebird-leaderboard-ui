import React, { useEffect, useState } from "react";
import "./PictureInput.scss";
import { Http } from "../../../utilities/http";
import { baseImageUrl, userIconUrl } from "../../../models/constants/urls";
import { UpdateIconDto } from "../../../models/dto/user/update-icon";
import { Storage } from "../../../utilities/storage";

export default function PictureInput() {
    const [userIcon, setUserIcon] = useState(null as number | null);

    useEffect(() => {
        // Runs only once on component mount
        retrieveExistingIcon();
    }, []);

    async function retrieveExistingIcon() {
        const response = await Http.get<UpdateIconDto>(userIconUrl, Storage.jwt);

        if (response != null) {
            setUserIcon(response.icon);
        }
    }

    async function pictureClicked(icon: number) {
        setUserIcon(icon);

        // Send the update to the server
        const body: UpdateIconDto = {icon};
        await Http.post(userIconUrl, body, Storage.jwt);
    }

    return (
        <div className="picture-input">
            <div className="picture-flex">
                <div className={"picture card " + (userIcon === 1 ? 'selected' : '')}
                     onClick={() => pictureClicked(1)}>
                    <img src={`${baseImageUrl}/1`}></img>
                </div>
                <div className={"picture card " + (userIcon === 2 ? 'selected' : '')}
                     onClick={() => pictureClicked(2)}>
                    <img src={`${baseImageUrl}/2`}></img>
                </div>
                <div className={"picture card " + (userIcon === 3 ? 'selected' : '')}
                     onClick={() => pictureClicked(3)}>
                    <img src={`${baseImageUrl}/3`}></img>
                </div>
                <div className={"picture card " + (userIcon === 4 ? 'selected' : '')}
                     onClick={() => pictureClicked(4)}>
                    <img src={`${baseImageUrl}/4`}></img>
                </div>
                <div className={"picture card " + (userIcon === 5 ? 'selected' : '')}
                     onClick={() => pictureClicked(5)}>
                    <img src={`${baseImageUrl}/5`}></img>
                </div>
                <div className={"picture card " + (userIcon === 6 ? 'selected' : '')}
                     onClick={() => pictureClicked(6)}>
                    <img src={`${baseImageUrl}/6`}></img>
                </div>
                <div className={"picture card " + (userIcon === 7 ? 'selected' : '')}
                     onClick={() => pictureClicked(7)}>
                    <img src={`${baseImageUrl}/7`}></img>
                </div>
            </div>
        </div>
    );
}
