/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const prefix = [0];
    for (const x of arr) {
        prefix.push(prefix[prefix.length - 1] ^ x);
    }
    return queries.map(([l, r]) => prefix[r + 1] ^ prefix[l]);
};
