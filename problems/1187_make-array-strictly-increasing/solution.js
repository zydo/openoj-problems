/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
    const b = Array.from(new Set(arr2)).sort((x, y) => x - y);
    const m = b.length;

    // bisectRight: index of first element > key
    const bisectRight = (key) => {
        let lo = 0,
            hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (b[mid] <= key) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    const dp = new Map();
    dp.set(arr1[0], 0);
    for (const v of b) {
        if (v < arr1[0]) dp.set(v, 1);
    }

    for (let i = 1; i < arr1.length; i++) {
        const ndp = new Map();
        for (const [last, ops] of dp) {
            if (arr1[i] > last) {
                const cur = ndp.get(arr1[i]);
                if (cur === undefined || cur > ops) ndp.set(arr1[i], ops);
            }
            const idx = bisectRight(last);
            if (idx < m) {
                const v = b[idx];
                const cost = ops + 1;
                const cur = ndp.get(v);
                if (cur === undefined || cur > cost) ndp.set(v, cost);
            }
        }
        if (ndp.size === 0) return -1;
        dp.clear();
        for (const [k, v] of ndp) dp.set(k, v);
    }

    let best = Infinity;
    for (const ops of dp.values()) best = Math.min(best, ops);
    return best;
};
