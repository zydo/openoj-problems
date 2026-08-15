/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    const unique = Array.from(new Set(words));
    unique.sort((a, b) => a.length - b.length);
    const dp = new Map();
    let best = 0;
    for (const word of unique) {
        let current = 1;
        for (let i = 0; i < word.length; i++) {
            const predecessor = word.slice(0, i) + word.slice(i + 1);
            const prev = dp.get(predecessor);
            if (prev !== undefined && prev + 1 > current) {
                current = prev + 1;
            }
        }
        dp.set(word, current);
        if (current > best) {
            best = current;
        }
    }
    return best;
};
