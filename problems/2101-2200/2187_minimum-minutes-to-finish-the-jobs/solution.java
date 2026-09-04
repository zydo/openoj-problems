class Solution {

    public long minMinutesToFinishJobs(int[] cycles, int quota) {
        long mn = Long.MAX_VALUE;
        for (int x : cycles) {
            mn = Math.min(mn, x);
        }
        // The completed-job total is non-decreasing in t, so binary search
        // the first feasible minute; the fastest worker alone bounds the answer.
        long lo = 1;
        long hi = mn * quota;
        while (lo < hi) {
            long mid = (lo + hi) / 2;
            if (jobsDone(mid, cycles) >= quota) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }

    private long jobsDone(long t, int[] cycles) {
        // Workers run independently: each finishes t / x jobs by minute t, so
        // the floor-sum is the exact job count — no simulation.
        long total = 0;
        for (int x : cycles) {
            total += t / x;
        }
        return total;
    }
}
