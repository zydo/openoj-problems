/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    const n = startTime.length;
    const jobs = [];
    for (let i = 0; i < n; i++) {
        jobs.push([endTime[i], startTime[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const ends = jobs.map((job) => job[0]);

    const bisectRight = (values, target, hi) => {
        let lo = 0;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (values[mid] <= target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    };

    const best = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        const [end, start, p] = jobs[i - 1];
        const j = bisectRight(ends, start, i - 1);
        best[i] = Math.max(best[i - 1], best[j] + p);
    }
    return best[n];
};
