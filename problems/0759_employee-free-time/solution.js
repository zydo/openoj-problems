/**
 * @param {number[][][]} schedule
 * @return {number[][]}
 */
var employeeFreeTime = function (schedule) {
    const intervals = []
        .concat(...schedule)
        .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    const free = [];
    let previousEnd = null;
    for (const [start, end] of intervals) {
        if (previousEnd !== null && start > previousEnd) {
            free.push([previousEnd, start]);
        }
        previousEnd = previousEnd === null ? end : Math.max(previousEnd, end);
    }
    return free;
};
