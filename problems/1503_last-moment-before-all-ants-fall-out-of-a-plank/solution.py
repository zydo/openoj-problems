from typing import List, Optional


class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        best = 0
        for position in left:
            best = max(best, position)
        for position in right:
            best = max(best, n - position)
        return best
