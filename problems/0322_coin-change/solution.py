from typing import List, Optional


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        inf = float("inf")
        dp = [0] + [inf] * amount
        for a in range(1, amount + 1):
            best = inf
            for c in coins:
                if c <= a and dp[a - c] + 1 < best:
                    best = dp[a - c] + 1
            dp[a] = best
        return -1 if dp[amount] == inf else dp[amount]
