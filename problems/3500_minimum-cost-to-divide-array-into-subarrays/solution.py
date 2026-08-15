from typing import List, Optional


class Solution:
    def minimumCost(self, nums: List[int], cost: List[int], k: int) -> int:
        n = len(nums)
        pref_nums = [0] * (n + 1)
        pref_cost = [0] * (n + 1)
        for i in range(n):
            pref_nums[i + 1] = pref_nums[i] + nums[i]
            pref_cost[i + 1] = pref_cost[i] + cost[i]

        INF = 10**30
        dp = [INF] * (n + 1)
        dp[n] = 0
        total_cost = pref_cost[n]
        for i in range(n - 1, -1, -1):
            best = INF
            for j in range(i, n):
                seg = pref_nums[j + 1] * (pref_cost[j + 1] - pref_cost[i])
                seg += k * (total_cost - pref_cost[i])
                cand = seg + dp[j + 1]
                if cand < best:
                    best = cand
            dp[i] = best
        return dp[0]
