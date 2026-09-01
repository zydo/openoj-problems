/**
 * @param {number[]} stock
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var flavorReachable = function (stock, queries) {
    // Prefix sums: pref[i] is the total candies in types 0 .. i-1. The
    // earliest day type t can be touched is floor(pref[t] / cap); the
    // latest is pref[t] + stock[t] - 1. The query holds iff
    // favoriteDay lies in that window. Totals stay below 2^53, so plain
    // JS numbers hold the prefix sums exactly.
    const pref = [0];
    for (const c of stock) pref.push(pref[pref.length - 1] + c);
    return queries.map(([t, day, cap]) => {
        const earliest = Math.floor(pref[t] / cap);
        const latest = pref[t] + stock[t] - 1;
        return earliest <= day && day <= latest;
    });
};
