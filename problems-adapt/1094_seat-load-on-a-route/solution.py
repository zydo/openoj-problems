from typing import List, Optional


class Solution:
    def seatLoadFits(self, groups: List[List[int]], capacity: int) -> bool:
        # difference array over the bounded locations: each group is just
        # two events, +passengers at pickup and -passengers at dropoff
        diff = [0] * 1001
        for num, start, end in groups:
            # dropoff lands at the exact end location, so during the sweep
            # it frees seats before any pickup at the same point
            diff[start] += num
            diff[end] -= num
        # index order is the sweep: the running sum is the occupancy
        used = 0
        for delta in diff:
            used += delta
            if used > capacity:
                return False
        return True
