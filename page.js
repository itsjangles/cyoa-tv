class Page {
    constructor(dialogueArray, nextPagesArray, pageNumber) {
        this.pageNumber = pageNumber;
        this.dialogues = dialogueArray;
        this.nextPages = nextPagesArray;
    }
}

module.exports = Page;