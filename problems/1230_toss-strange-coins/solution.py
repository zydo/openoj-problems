from typing import List, Optional


class Solution:
    def probabilityOfHeads(self, prob: List[float], target: int) -> float:
        dp = [0.0] * (target + 1)
        dp[0] = 1.0
        for p in prob:
            for c in range(target, 0, -1):
                dp[c] = dp[c] * (1 - p) + dp[c - 1] * p
            dp[0] *= 1 - p
        return dp[target]
