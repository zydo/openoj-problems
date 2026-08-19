from typing import List, Optional
from bisect import bisect_left, bisect_right


class Solution:
    def countCovering(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        # The two sides can be sorted separately: a query never needs to know
        # which start belongs to which end, only the two one-sided counts.
        starts = sorted(f[0] for f in intervals)
        ends = sorted(f[1] for f in intervals)
        # blooming at t: start <= t and end >= t. bisect_right counts starts
        # <= t (a flower starting exactly at t is blooming); bisect_left
        # counts ends < t, so a flower ending exactly at t is still counted.
        return [bisect_right(starts, t) - bisect_left(ends, t) for t in queries]
