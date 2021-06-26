import apiServer from "../conf/config";


export default class GameAPI {
    static sendStartNewGame() {
        const url = `${apiServer.protocol}://${apiServer.host}:${apiServer.port}/api/controller/startNewGame`;
        fetch(url, {
            method: 'POST'
        }).then(async (response) => {
            const data = await response.json();
            // check for error response
            if (!response.ok) { 
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            } else {
                console.log("Request complete!");
                console.log("Response: " + data);
            }

        }).catch((error) => {
            console.log(error);
        });
    }

    static async sendScore(wins: Number, lost: Number) {
        const url = `${apiServer.protocol}://${apiServer.host}:${apiServer.port}/api/controller/score`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ "wins": wins, "lost": lost })
        }).then(async (response) => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            } else {
                console.log("Request complete!");
                console.log("Response: " + data);
            }
        }).catch((error) => {
            console.log(error);
        });


    }
}