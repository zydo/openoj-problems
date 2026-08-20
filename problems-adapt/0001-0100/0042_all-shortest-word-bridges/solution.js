/**
 * @param {string} startWord
 * @param {string} targetWord
 * @param {string[]} dictionary
 * @return {string[][]}
 */
var allShortestBridges = function (startWord, targetWord, dictionary) {
    const wordSet = new Set(dictionary);
    if (!wordSet.has(targetWord)) return [];
    // Drop startWord so the search can never route back through it.
    wordSet.delete(startWord);

    // BFS over the implicit one-letter-difference graph: record each word's
    // shortest distance and a DAG of shortest-path edges.
    const dist = new Map([[startWord, 0]]);
    const adjacency = new Map();
    const queue = [startWord];
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let head = 0; head < queue.length; head++) {
        const word = queue[head];
        const d = dist.get(word);
        for (let i = 0; i < word.length; i++) {
            // Try substituting each of the 25 other letters at position i.
            for (const c of letters) {
                if (c === word[i]) continue;
                const nxt = word.slice(0, i) + c + word.slice(i + 1);
                if (!wordSet.has(nxt)) continue;
                const nd = dist.get(nxt);
                if (nd === undefined) {
                    // First discovery: nxt is one level below word.
                    dist.set(nxt, d + 1);
                    if (!adjacency.has(word)) adjacency.set(word, []);
                    adjacency.get(word).push(nxt);
                    queue.push(nxt);
                } else if (nd === d + 1) {
                    // Already exactly one level below: parallel shortest edge.
                    if (!adjacency.has(word)) adjacency.set(word, []);
                    adjacency.get(word).push(nxt);
                }
                // Same-level or backward edges never lie on a shortest bridge,
                // so they are simply not recorded.
            }
        }
    }

    const result = [];
    const path = [startWord];

    // DFS over the recorded DAG: every edge advances exactly one BFS level, so
    // so any walk from the start to the target is a shortest bridge.
    const dfs = (word) => {
        if (word === targetWord) {
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

    dfs(startWord);
    return result;
};
