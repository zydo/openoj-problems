from typing import List, Optional


class Solution:
    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:
        dp = [0] * (k + 1)
        for pile in piles:
            prefix = [0]
            for coin in pile:
                prefix.append(prefix[-1] + coin)
            take_max = min(len(pile), k)
            ndp = [0] * (k + 1)
            for j in range(k + 1):
                value = dp[j]
                for t in range(1, min(take_max, j) + 1):
                    cand = dp[j - t] + prefix[t]
                    if cand > value:
                        value = cand
                ndp[j] = value
            dp = ndp
        return dp[k]
