from typing import List, Optional


class Solution:
    def maximizeTheProfit(self, n: int, offers: List[List[int]]) -> int:
        by_end = [[] for _ in range(n)]
        for start, end, gold in offers:
            by_end[end].append((start, gold))
        dp = [0] * (n + 1)
        for end in range(n):
            dp[end + 1] = dp[end]
            for start, gold in by_end[end]:
                cand = dp[start] + gold
                if cand > dp[end + 1]:
                    dp[end + 1] = cand
        return dp[n]
