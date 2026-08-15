/**
 * @param {string[]} words
 * @return {number[]}
 */
var sumPrefixScores = function (words) {
    const root = { next: new Map(), cnt: 0 };
    for (const word of words) {
        let node = root;
        for (const ch of word) {
            let nxt = node.next.get(ch);
            if (!nxt) {
                nxt = { next: new Map(), cnt: 0 };
                node.next.set(ch, nxt);
            }
            node = nxt;
            node.cnt++;
        }
    }
    const scores = [];
    for (const word of words) {
        let node = root;
        let total = 0;
        for (const ch of word) {
            node = node.next.get(ch);
            total += node.cnt;
        }
        scores.push(total);
    }
    return scores;
};
