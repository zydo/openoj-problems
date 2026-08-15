from typing import List, Optional


class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        def trips_done(t):
            return sum(t // x for x in time)

        lo, hi = 1, min(time) * totalTrips
        while lo < hi:
            mid = (lo + hi) // 2
            if trips_done(mid) >= totalTrips:
                hi = mid
            else:
                lo = mid + 1
        return lo
