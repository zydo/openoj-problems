from typing import List


class Solution:
    def splitScheduleTime(self, jobs: List[int], splitTime: int) -> int:
        # The splitting process is a full binary tree: a leaf at depth d is a
        # worker that starts working at d * splitTime. Deadline T is reachable
        # iff job i can sit on a leaf of depth d <= (T - jobs[i]) //
        # splitTime, and legal leaf-depth multisets are exactly the
        # Kraft-legal ones (sum 2^-d <= 1) -- minimized by taking every
        # job at its full depth bound. Binary search the minimal T.
        n = len(jobs)
        lo = max(jobs) + splitTime
        hi = max(jobs) + (n - 1) * splitTime

        def feasible(deadline: int) -> bool:
            slots = 0
            deep = 0
            for t in jobs:
                d = (deadline - t) // splitTime
                if d < 1:
                    return False
                if d > 30:
                    # bounds past depth 30 fit together in less than one
                    # 2^-30 unit of slack (n < 2^17 jobs), so count all
                    # of them as a single unit
                    deep = 1
                else:
                    slots += 1 << (30 - d)
                    if slots > 1 << 30:
                        return False
            return slots + deep <= 1 << 30

        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
