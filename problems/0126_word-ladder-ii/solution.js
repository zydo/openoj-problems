/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];
    wordSet.delete(beginWord);

    const dist = new Map([[beginWord, 0]]);
    const adjacency = new Map();
    const queue = [beginWord];
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let head = 0; head < queue.length; head++) {
        const word = queue[head];
        const d = dist.get(word);
        for (let i = 0; i < word.length; i++) {
            for (const c of letters) {
                if (c === word[i]) continue;
                const nxt = word.slice(0, i) + c + word.slice(i + 1);
                if (!wordSet.has(nxt)) continue;
                const nd = dist.get(nxt);
                if (nd === undefined) {
                    dist.set(nxt, d + 1);
                    if (!adjacency.has(word)) adjacency.set(word, []);
                    adjacency.get(word).push(nxt);
                    queue.push(nxt);
                } else if (nd === d + 1) {
                    if (!adjacency.has(word)) adjacency.set(word, []);
                    adjacency.get(word).push(nxt);
                }
            }
        }
    }

    const result = [];
    const path = [beginWord];

    const dfs = (word) => {
        if (word === endWord) {
            result.push(path.slice());
            return;
        }
        const neighbors = adjacency.get(word) || [];
        for (const nxt of neighbors) {
            path.push(nxt);
            dfs(nxt);
            path.pop();
        }
    };

    dfs(beginWord);
    return result;
};
