class Solution:
    def minMinutesToFinishJobs(self, cycles: list[int], quota: int) -> int:
        def jobs_done(t):
            # Workers run independently: each finishes t // x jobs by minute
            # t, so the floor-sum is the exact job count — no simulation.
            return sum(t // x for x in cycles)

        # The completed-job total is non-decreasing in t, so binary search
        # the first feasible minute; the fastest worker alone bounds the answer.
        lo, hi = 1, min(cycles) * quota
        while lo < hi:
            mid = (lo + hi) // 2
            if jobs_done(mid) >= quota:
                hi = mid
            else:
                lo = mid + 1
        return lo
