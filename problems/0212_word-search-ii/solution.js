/**
 * @param {string[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    const m = board.length,
        n = board[0].length;
    const trie = new Map();
    for (const word of words) {
        let node = trie;
        for (const ch of word) {
            if (!node.has(ch)) node.set(ch, new Map());
            node = node.get(ch);
        }
        node.set("#", word);
    }

    const found = new Set();
    const seen = Array.from({ length: m }, () => new Array(n).fill(false));

    const dfs = (i, j, node) => {
        const ch = board[i][j];
        if (!node.has(ch)) return;
        node = node.get(ch);
        if (node.has("#")) found.add(node.get("#"));
        seen[i][j] = true;
        for (const [di, dj] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            const ni = i + di,
                nj = j + dj;
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj]) {
                dfs(ni, nj, node);
            }
        }
        seen[i][j] = false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, trie);
        }
    }
    return Array.from(found).sort();
};
