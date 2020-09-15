const delay = 50;

const colors = require('colors');

const prompt = async (text) => {
    write(text, '\r\n');
    return await require("readline-async")();
};

const colourize = (colour) => {

};

const write = async ({ text, player }) => {
    const { colour } = player;
    let colouredText = text;

    if (colour) {
        if (colour === "red") {
            colouredText = text.red;
        } else if (colour === "gray") {
            colouredText = text.gray;
        } else if (colour === "blue") {
            colouredText = text.blue;
        }
    }

    return new Promise(async (resolve, reject) => {
        let position = 0;
        player.name && process.stdout.write(`${player.name}\n`);
        while (position < colouredText.length) {
            let p = position;
            setTimeout(() => {
                process.stdout.write(colouredText[p]);
            }, delay * p);
            position++;
        }

        setTimeout(() => {
            process.stdout.write("\n");
            resolve();
        }, delay * colouredText.length + 2000);
    });
};

module.exports = { prompt, write };