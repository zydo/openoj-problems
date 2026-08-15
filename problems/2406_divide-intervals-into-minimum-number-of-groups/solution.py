from typing import List, Optional


class Solution:
    def minGroups(self, intervals: List[List[int]]) -> int:
        starts = sorted(interval[0] for interval in intervals)
        ends = sorted(interval[1] for interval in intervals)
        groups = 0
        active = 0
        i = j = 0
        n = len(starts)
        while i < n:
            if starts[i] <= ends[j]:
                active += 1
                if active > groups:
                    groups = active
                i += 1
            else:
                active -= 1
                j += 1
        return groups
