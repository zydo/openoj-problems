from typing import List


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        # Position 0 is frozen, so every later value is a multiple of the one
        # before it. Cap the value axis at 2 * max(nums): no optimal chain
        # ever needs a value above that (exchange argument in solutions.md).
        n = len(nums)
        if n == 1:
            return 0
        cap = 2 * max(nums)
        INF = 10 ** 9
        dp = [INF] * (cap + 1)
        dp[nums[0]] = 0
        for x in nums[1:]:
            ndp = [INF] * (cap + 1)
            for u in range(1, cap + 1):
                if dp[u] >= INF:
                    continue
                # First multiple of u reaching x, then every multiple after.
                start = ((x + u - 1) // u) * u
                for v in range(start, cap + 1, u):
                    cand = dp[u] + (v - x)
                    if cand < ndp[v]:
                        ndp[v] = cand
            dp = ndp
        return min(dp)
