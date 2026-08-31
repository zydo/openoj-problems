/**
 * @param {number[]} crates
 * @return {number}
 */
var demolishCrates = function (crates) {
    // Memoized interval DP. dfs(l, r, k) is the best score from
    // crates[l..r] when k crates of crates[l]'s color, already removed
    // from outside the interval, sit glued to its left and will join
    // its group.
    const n = crates.length;
    const memo = new Map();

    function dfs(l, r, k) {
        if (l > r) {
            return 0;
        }
        // Adjacent same-colored crates never need separate treatment:
        // holding crates[l] until its identical neighbor leaves only
        // grows the eventual group, so the run joins the carry.
        while (l < r && crates[l + 1] === crates[l]) {
            l += 1;
            k += 1;
        }
        // (l, r, k) packed into one integer: all three stay below 128.
        const key = (l << 14) | (r << 7) | k;
        if (memo.has(key)) {
            return memo.get(key);
        }
        // Either take crates[l] and its carry now, scoring (k+1)^2...
        let best = (k + 1) * (k + 1) + dfs(l + 1, r, 0);
        // ...or hold it: clear crates[l+1..m-1] first, so crates[l]
        // meets the next same-colored crate one richer in the carry.
        for (let m = l + 1; m <= r; m += 1) {
            if (crates[m] === crates[l]) {
                best = Math.max(best, dfs(l + 1, m - 1, 0) + dfs(m, r, k + 1));
            }
        }
        memo.set(key, best);
        return best;
    }

    return dfs(0, n - 1, 0);
};
