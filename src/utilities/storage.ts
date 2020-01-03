/** Used to manage user's local storage */
export class Storage {
    /** The JWT used to authenticate with the server */
    private _jwt: string | null | undefined;

    public get jwt(): string {
        if (this._jwt == null) {
            this._jwt = window.localStorage.getItem("token");
        }

        return this._jwt ?? "";
    }

    public set jwt(value: string) {
        this._jwt = value;
        // Also save in storage
        if (value == null) {
            window.localStorage.clear();
        } else {
            window.localStorage.setItem("token", value);
        }
    }
}
