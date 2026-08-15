from typing import List, Optional


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        prev2, prev1 = 0, 0
        for c in cost:
            cur = c + min(prev1, prev2)
            prev2, prev1 = prev1, cur
        return min(prev1, prev2)
