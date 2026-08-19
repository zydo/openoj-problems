class Solution {
  public:
    long long minMinutesToFinishJobs(vector<int> &cycles, int quota) {
        long long mn = *min_element(cycles.begin(), cycles.end());
        // The completed-job total is non-decreasing in t, so binary search
        // the first feasible minute; the fastest worker alone bounds the answer.
        long long lo = 1;
        long long hi = mn * quota;
        auto jobsDone = [&](long long t) {
            // Workers run independently: each finishes t / x jobs by minute
            // t, so the floor-sum is the exact job count — no simulation.
            long long total = 0;
            for (int x : cycles) {
                total += t / x;
            }
            return total;
        };
        while (lo < hi) {
            long long mid = (lo + hi) / 2;
            if (jobsDone(mid) >= quota) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
};
