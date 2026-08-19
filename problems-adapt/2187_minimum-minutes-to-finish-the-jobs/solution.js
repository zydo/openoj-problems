/**
 * @param {number[]} cycles
 * @param {number} quota
 * @return {number}
 */
var minMinutesToFinishJobs = function (cycles, quota) {
    const jobsDone = (t) => {
        // Workers run independently: each finishes floor(t / x) jobs by
        // minute t, so the floor-sum is the exact job count — no simulation.
        let total = 0;
        for (const x of cycles) {
            total += Math.floor(t / x);
        }
        return total;
    };

    let mn = Infinity;
    for (const x of cycles) {
        mn = Math.min(mn, x);
    }
    // The completed-job total is non-decreasing in t, so binary search the
    // first feasible minute; the fastest worker alone bounds the answer.
    let lo = 1;
    let hi = mn * quota;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (jobsDone(mid) >= quota) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
