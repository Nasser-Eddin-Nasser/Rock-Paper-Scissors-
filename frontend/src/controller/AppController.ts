export async function sendStartNewGame() { 
    const url = 'http://localhost:9090/api/controller/startNewGame';
    fetch(url, {
        method: 'POST'
    }).then(() => {
        console.log("Request complete! response:");
    });
}

export async function sendScore(wins: Number, lost: Number) { 
    const url = 'http://localhost:9090/api/controller/score';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({"wins": wins, "lost": lost})
    }).then(() => {
        console.log("Request complete! response:");
    });
}