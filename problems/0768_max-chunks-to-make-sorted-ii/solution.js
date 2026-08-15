/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    const ordered = arr.slice().sort((a, b) => a - b);
    const counts = new Map();
    let balance = 0;
    let chunks = 0;
    for (let i = 0; i < arr.length; i++) {
        const a = arr[i],
            b = ordered[i];
        const ca = (counts.get(a) || 0) + 1;
        counts.set(a, ca);
        balance += ca > 0 ? 1 : -1;
        const cb = (counts.get(b) || 0) - 1;
        counts.set(b, cb);
        balance += cb < 0 ? 1 : -1;
        if (balance === 0) chunks++;
    }
    return chunks;
};
