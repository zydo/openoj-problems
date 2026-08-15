from typing import List, Optional


class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        intervals = sorted((max(0, i - r), min(n, i + r)) for i, r in enumerate(ranges))
        count = 0
        covered = 0
        i = 0
        total = len(intervals)
        while covered < n:
            reach = covered
            while i < total and intervals[i][0] <= covered:
                reach = max(reach, intervals[i][1])
                i += 1
            if reach == covered:
                return -1
            covered = reach
            count += 1
        return count
