/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
    const pairs = plantTime.map((p, i) => [p, growTime[i]]);
    pairs.sort((a, b) => b[1] - a[1]);
    let best = 0;
    let prefix = 0;
    for (const [plant, grow] of pairs) {
        prefix += plant;
        best = Math.max(best, prefix + grow);
    }
    return best;
};
