import apiServer from "../conf/config";


export default class GameAPI {
    static sendStartNewGame() {
        const url = `${apiServer.protocol}://${apiServer.host}:${apiServer.port}/api/controller/startNewGame`;
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain"
            }

        }).then(response => response.text().then(function (text) {
            console.log(text);
        }))
            .catch((error) => {
                console.log(error);
            });
    }

    static async sendScore(wins: Number, lost: Number) {
        const url = `${apiServer.protocol}://${apiServer.host}:${apiServer.port}/api/controller/score`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ wins: wins, lost: lost })
        })
            .then(function (response) { return response.json(); })
            .then(function (json) {
                console.log(json);
            })
            .catch((error) => {
                console.log("4")
                console.log(error);
            });

    }
}