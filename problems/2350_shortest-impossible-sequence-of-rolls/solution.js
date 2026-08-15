/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function (rolls, k) {
    const seen = new Set();
    let answer = 1;
    for (const r of rolls) {
        seen.add(r);
        if (seen.size === k) {
            answer += 1;
            seen.clear();
        }
    }
    return answer;
};
