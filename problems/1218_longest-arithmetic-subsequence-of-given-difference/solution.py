from typing import List, Optional


class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        dp = {}
        best = 0
        for x in arr:
            dp[x] = dp.get(x - difference, 0) + 1
            if dp[x] > best:
                best = dp[x]
        return best
