/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    envelopes = envelopes.slice().sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const tails = [];
    for (const e of envelopes) {
        const x = e[1];
        let lo = 0,
            hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(x);
        else tails[lo] = x;
    }
    return tails.length;
};
