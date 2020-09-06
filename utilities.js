const prompt = async (text) => {
    write(text, '\r\n');
    return await require("readline-async")();
};
const write = (text) => {
    return new Promise(async (resolve, reject) => {

        for (let position = 0; position < text.length; ++position) {
            await setTimeout(() => {
                process.stdout.write(text[position]);
            }, 500);
        }

        resolve();
    });
};

module.exports = { prompt, write };