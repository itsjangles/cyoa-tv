const { prompt } = require('./utilities');

const promptForAction = async (text, actions) => {
    for(let i = 0; i < actions.length; ++i) {
        let { number, action } = actions[i];
        console.log(`${number}: ${action}`);
    }
    await prompt(text);
};

module.exports = { promptForAction };