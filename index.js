const { prompt } = require("./utilities");
const chapter01 = require("./chapter.01");



(async () => {
    const playerName = await prompt("Welcome adventurer! What is your name?");
    await chapter01(playerName);
})();