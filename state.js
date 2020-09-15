const { write } = require("./utilities");

class State {
    constructor(pageObj) {
        this.pageObj = pageObj;
    }

    async output() {
        const { dialogues } = this.pageObj;
        await write({ text: `Page ${this.pageObj.pageNumber}`, player: "null" });
        for (let i = 0; i < dialogues.length; ++i) {
            const dialogue = dialogues[i];
            await write(dialogue);
        }
    }

    next(choice) {

    }
}

module.exports = State;