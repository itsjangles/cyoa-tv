const prompt = async (text) => {
    write(text, '\r\n');
    return await require("readline-async")();
};
const write = async (text) => {
    return new Promise(async (resolve, reject) => {
        let position = 0;

        while (position < text.length) {
            let p = position;
            setTimeout(() => {
                process.stdout.write(text[p]);
            }, 50 * p);
            position++;
        }
        resolve();
    });
};

module.exports = { prompt, write };