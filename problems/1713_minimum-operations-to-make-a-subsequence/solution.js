/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function (target, arr) {
    const index = new Map();
    for (let i = 0; i < target.length; i++) {
        index.set(target[i], i);
    }
    const tails = [];
    for (const value of arr) {
        if (!index.has(value)) continue;
        const v = index.get(value);
        // binary search for lower bound of v in tails
        let lo = 0,
            hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < v) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(v);
        else tails[lo] = v;
    }
    return target.length - tails.length;
};
