from typing import List, Optional


class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        n = len(cost)
        INF = 10**18
        dp = [INF] * (n + 1)
        dp[0] = 0
        for i in range(n):
            weight = time[i] + 1
            c = cost[i]
            for j in range(n, 0, -1):
                src = j - weight if j >= weight else 0
                cand = dp[src] + c
                if cand < dp[j]:
                    dp[j] = cand
        return dp[n]
