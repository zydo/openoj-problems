/**
 * @param {number[][][]} timelines
 * @return {number[][]}
 */
var sharedIdleGaps = function (timelines) {
    // A moment is free exactly when no timeline is busy, so only the
    // union matters: pool every interval, forgetting ownership.
    const intervals = [].concat(...timelines).sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    const free = [];
    let previousEnd = null;
    for (const [start, end] of intervals) {
        // Starting strictly beyond the furthest end seen so far proves
        // nothing covers (previousEnd, start); strictness keeps
        // touching intervals continuous (no zero-length gaps).
        if (previousEnd !== null && start > previousEnd) {
            free.push([previousEnd, start]);
        }
        // Otherwise merge into the busy block, keeping the running max
        // of ends so a long interval absorbs shorter ones inside it.
        previousEnd = previousEnd === null ? end : Math.max(previousEnd, end);
    }
    return free;
};
