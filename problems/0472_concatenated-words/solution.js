/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    const dictionary = new Set(words);

    const isConcatenated = (word) => {
        const n = word.length;
        const dp = new Array(n + 1).fill(false);
        dp[0] = true;
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                if (j === 0 && i === n) {
                    continue; // the word itself does not count as a part
                }
                if (dp[j] && dictionary.has(word.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    };

    const result = [];
    for (const word of words) {
        if (isConcatenated(word)) {
            result.push(word);
        }
    }
    return result;
};
