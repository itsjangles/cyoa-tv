const { promptForAction } = require("actions");
const { prompt } = require("utilities");
const { narrator, innkeeper } = require("voices");
const tavernName = "Eht Nrevat";



module.exports =
    async (playerName) => {
        narrator(`You are ${playerName}. As you arrive at ${tavernName}, you notice that the bar area is fairly quiet for this time of day.`);
        narrator("The innkeeper notices you standing at the entryway.");

        innkeeper("Are you just going to stand there and block the door?");

        nextAction = await promptForAction("What will you do?", [
            { number: 1, action: "Start a bar fight" },
            { number: 2, action: "Get a room for the night" },
            { number: 3, action: "Order a random drink" },
        ]);

        switch (nextAction) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            default:
        }
    };