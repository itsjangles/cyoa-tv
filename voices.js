const colors = require('colors');
const { write } = require('./utilities');
const narrator = text => {
    write(text.gray);
};

const innkeeper = text => {
    write(`Innkeeper: ${text.blue}`);
};

module.exports = {
    narrator,
    innkeeper
}