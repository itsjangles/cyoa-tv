const Dialogue = require("./dialogue");
const Player = require("./player");
const Page = require("./page");
const { write } = require("./utilities");
const State = require("./state");

const players = [
    new Player("Narrator", "gray"),
    new Player("Innkeeper", "blue"),
    new Player("Town Drunk", "red"),
];

const dialoguePage1 = [
    new Dialogue(players[0], "Welcome to the adventure."),
    new Dialogue(players[1], "What can I get for you?")
];

const pages = [
    new Page(dialoguePage1, [], 1)
];

const state = new State(pages[0]);

( async () => {
    await state.output();
})();