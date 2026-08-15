/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function (sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;

    const parent = new Map();
    const find = (x) => {
        if (!parent.has(x)) parent.set(x, x);
        while (parent.get(x) !== x) {
            parent.set(x, parent.get(parent.get(x)));
            x = parent.get(x);
        }
        return x;
    };
    const union = (a, b) => {
        const ra = find(a),
            rb = find(b);
        if (ra !== rb) parent.set(ra, rb);
    };

    for (const [a, b] of similarPairs) {
        union(a, b);
    }

    for (let i = 0; i < sentence1.length; i++) {
        const a = sentence1[i],
            b = sentence2[i];
        if (a !== b && find(a) !== find(b)) return false;
    }
    return true;
};
