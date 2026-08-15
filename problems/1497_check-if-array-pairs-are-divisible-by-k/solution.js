/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    const freq = new Array(k).fill(0);
    for (const x of arr) {
        freq[((x % k) + k) % k] += 1;
    }
    if (freq[0] % 2 !== 0) return false;
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (freq[i] !== freq[k - i]) return false;
    }
    return true;
};
