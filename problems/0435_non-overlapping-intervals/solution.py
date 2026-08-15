from typing import List, Optional


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        removed = 0
        prev_end = None
        for start, end in sorted(intervals, key=lambda x: x[1]):
            if prev_end is None or start >= prev_end:
                prev_end = end
            else:
                removed += 1
        return removed
