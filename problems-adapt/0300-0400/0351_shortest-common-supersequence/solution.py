from typing import List, Optional


class Solution:
    def shortestCommonSupersequence(self, s: str, t: str) -> str:
        n, m = len(s), len(t)
        # dp[i][j] = length of the LCS of s[i:] and t[j:].
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                if s[i] == t[j]:
                    dp[i][j] = dp[i + 1][j + 1] + 1
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])

        parts = []
        i = j = 0
        while i < n and j < m:
            if s[i] == t[j]:
                parts.append(s[i])
                i += 1
                j += 1
            elif dp[i + 1][j] >= dp[i][j + 1]:
                parts.append(s[i])
                i += 1
            else:
                parts.append(t[j])
                j += 1
        parts.append(s[i:])
        parts.append(t[j:])
        return "".join(parts)
