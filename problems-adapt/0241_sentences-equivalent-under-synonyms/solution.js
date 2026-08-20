/**
 * @param {string[]} wordsA
 * @param {string[]} wordsB
 * @param {string[][]} synonyms
 * @return {boolean}
 */
var sentencesEquivalent = function (wordsA, wordsB, synonyms) {
    // Different lengths can never be similar.
    if (wordsA.length !== wordsB.length) return false;

    const parent = new Map();
    // Unseen words register as their own singleton component; path halving
    // keeps the structure flat.
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

    // Symmetry + transitivity: similar exactly when identical or in the
    // same component, so unioning the pairs captures the whole relation.
    for (const [a, b] of synonyms) {
        union(a, b);
    }

    for (let i = 0; i < wordsA.length; i++) {
        const a = wordsA[i],
            b = wordsB[i];
        // Identical words pass; otherwise the roots must agree.
        if (a !== b && find(a) !== find(b)) return false;
    }
    return true;
};
