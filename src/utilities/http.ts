export class Http {
    /**
     * Sends a GET request to the given URL and returns the supplied type
     * @param url - The URL to send to
     */
    public static async get<T>(url: string): Promise<T | null> {
        const response = await fetch(url, {
            method: "GET"
        }).catch((e) => this.OnError(e));

        if (response != null && response.ok) {
            if (response.body != null) {
                return await response.json();
            }
        }
        return null;
    }

    /**
     * Sends a POST request to the given URL and returns the supplied type, if any
     * @param url - The URL to send to
     * @param body - The Body content to send in the POST request
     */
    public static async post<T>(url: string, body: any): Promise<T | null> {
        const response = await fetch(url, {
            method: "POST",
            body: body
        }).catch((e) => this.OnError(e));

        if (response != null && response.ok) {
            if (response.body != null) {
                return await response.json();
            }
        }
        return null;
    }

    /**
     * Sends a PUT request to the given URL and returns the supplied type, if any
     * @param url - The URL to send to
     * @param body - The Body content to send in the POST request
     */
    public static async put<T>(url: string, body: any): Promise<T | null> {
        const response = await fetch(url, {
            method: "PUT",
            body: body
        }).catch((e) => this.OnError(e));

        if (response != null && response.ok) {
            if (response.body != null) {
                return await response.json();
            }
        }
        return null;
    }

    /**
     * Sends a Delete request to the given URL and returns a bool indicating success
     * @param url - The URL to send to
     */
    public static async delete<T>(url: string): Promise<boolean> {
        const response = await fetch(url, {
            method: "DELETE"
        }).catch((e) => this.OnError(e));

        return (response != null) ? response.ok : false;
    }

    /** Called when there was an error with a HTTP response */
    public static OnError(error: any) {
        console.error(error);
    }
}
