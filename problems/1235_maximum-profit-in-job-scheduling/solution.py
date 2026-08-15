from typing import List, Optional


class Solution:
    def jobScheduling(
        self, startTime: List[int], endTime: List[int], profit: List[int]
    ) -> int:
        from bisect import bisect_right

        jobs = sorted(zip(endTime, startTime, profit))
        ends = [job[0] for job in jobs]
        n = len(jobs)
        best = [0] * (n + 1)
        for i in range(1, n + 1):
            end, start, p = jobs[i - 1]
            j = bisect_right(ends, start, 0, i - 1)
            best[i] = max(best[i - 1], best[j] + p)
        return best[n]
