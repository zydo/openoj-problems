/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function (n, conflictingPairs) {
    const g = Array.from({ length: n + 1 }, () => []);
    for (const pair of conflictingPairs) {
        let a = pair[0],
            b = pair[1];
        if (a > b) {
            const t = a;
            a = b;
            b = t;
        }
        g[a].push(b);
    }
    const cnt = new Array(n + 2).fill(0);
    let ans = 0,
        add = 0;
    let b1 = n + 1,
        b2 = n + 1;
    for (let a = n; a >= 1; a--) {
        for (const b of g[a]) {
            if (b < b1) {
                b2 = b1;
                b1 = b;
            } else if (b < b2) {
                b2 = b;
            }
        }
        ans += b1 - a;
        cnt[b1] += b2 - b1;
        if (cnt[b1] > add) {
            add = cnt[b1];
        }
    }
    ans += add;
    return ans;
};
