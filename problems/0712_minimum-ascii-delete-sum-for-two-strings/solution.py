from typing import List, Optional


class Solution:
    def minimumDeleteSum(self, s1: str, s2: str) -> int:
        a, b = s1, s2
        la, lb = len(a), len(b)
        dp = [[0] * (lb + 1) for _ in range(la + 1)]
        for j in range(1, lb + 1):
            dp[0][j] = dp[0][j - 1] + ord(b[j - 1])
        for i in range(1, la + 1):
            dp[i][0] = dp[i - 1][0] + ord(a[i - 1])
            for j in range(1, lb + 1):
                if a[i - 1] == b[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = min(
                        dp[i - 1][j] + ord(a[i - 1]), dp[i][j - 1] + ord(b[j - 1])
                    )
        return dp[la][lb]
