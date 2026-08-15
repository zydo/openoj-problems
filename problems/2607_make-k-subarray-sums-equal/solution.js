/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function (arr, k) {
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };
    const n = arr.length;
    const g = gcd(n, k);
    let total = 0;
    for (let r = 0; r < g; r++) {
        const group = [];
        for (let i = r; i < n; i += g) group.push(arr[i]);
        group.sort((a, b) => a - b);
        const median = group[Math.floor(group.length / 2)];
        for (const v of group) total += Math.abs(v - median);
    }
    return total;
};
