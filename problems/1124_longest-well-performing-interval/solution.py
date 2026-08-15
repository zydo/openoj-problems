from typing import List, Optional


class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        first = {0: -1}
        prefix = 0
        best = 0
        for i, hours_day in enumerate(hours):
            prefix += 1 if hours_day > 8 else -1
            if prefix > 0:
                best = i + 1
            elif prefix - 1 in first:
                best = max(best, i - first[prefix - 1])
            if prefix not in first:
                first[prefix] = i
        return best
