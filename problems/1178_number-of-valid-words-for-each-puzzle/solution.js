/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
    const counts = new Map();
    for (const w of words) {
        let m = 0;
        for (let t = 0; t < w.length; t++) m |= 1 << (w.charCodeAt(t) - 97);
        counts.set(m, (counts.get(m) || 0) + 1);
    }

    const answer = [];
    for (const puzzle of puzzles) {
        const first = 1 << (puzzle.charCodeAt(0) - 97);
        let puzzleMask = 0;
        for (let t = 0; t < puzzle.length; t++)
            puzzleMask |= 1 << (puzzle.charCodeAt(t) - 97);
        let total = 0;
        let sub = puzzleMask;
        while (sub !== 0) {
            if ((sub & first) !== 0) {
                total += counts.get(sub) || 0;
            }
            sub = (sub - 1) & puzzleMask;
        }
        answer.push(total);
    }
    return answer;
};
