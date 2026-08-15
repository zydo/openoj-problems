from typing import List, Optional


class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for s in strs:
            zeros = s.count("0")
            ones = len(s) - zeros
            for i in range(m, zeros - 1, -1):
                row = dp[i]
                prev = dp[i - zeros]
                for j in range(n, ones - 1, -1):
                    cand = prev[j - ones] + 1
                    if cand > row[j]:
                        row[j] = cand
        return dp[m][n]
