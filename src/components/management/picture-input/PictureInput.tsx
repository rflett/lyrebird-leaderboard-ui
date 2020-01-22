import React, { useEffect, useState } from "react";
import "./PictureInput.scss";
import { Http } from "../../../utilities/http";
import { baseImageUrl, imageFileExt, userIconUrl } from "../../../models/constants/urls";
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

    /** Returns the correct number of pickers for the images */
    function getPictureInputs() {
        const pictureCount = Number(process.env.REACT_APP_IMAGE_COUNT ?? 0);

        const rows: JSX.Element[] = [];
        for (let i = 0; i < pictureCount; i++) {
            rows.push(
                <div className={"picture card " + (userIcon === i + 1 ? 'selected' : '')}
                     onClick={() => pictureClicked(i + 1)}>
                    <img src={`${baseImageUrl}/${i + 1}.${imageFileExt}`} alt=""/>
                </div>
            );
        }
        return rows;
    }

    return (
        <div className="picture-input">
            <div className="picture-flex">
                {
                    getPictureInputs()
                }
            </div>
        </div>
    );
}
