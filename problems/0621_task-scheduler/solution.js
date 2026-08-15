/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    const counts = new Map();
    for (const t of tasks) {
        counts.set(t, (counts.get(t) || 0) + 1);
    }
    let maxFreq = 0;
    let numMax = 0;
    for (const v of counts.values()) {
        if (v > maxFreq) {
            maxFreq = v;
            numMax = 1;
        } else if (v === maxFreq) {
            numMax++;
        }
    }
    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + numMax);
};
