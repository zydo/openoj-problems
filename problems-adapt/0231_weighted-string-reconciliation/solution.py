from typing import List, Optional


class Solution:
    def reconcileDeletionCost(self, left: str, right: str) -> int:
        a, b = left, right
        la, lb = len(a), len(b)
        # dp[i][j] = least discard cost for reconciling the prefixes a[:i], b[:j].
        dp = [[0] * (lb + 1) for _ in range(la + 1)]
        # Boundary states: an unmatched prefix must be discarded in full.
        for j in range(1, lb + 1):
            dp[0][j] = dp[0][j - 1] + ord(b[j - 1])
        for i in range(1, la + 1):
            dp[i][0] = dp[i - 1][0] + ord(a[i - 1])
            for j in range(1, lb + 1):
                if a[i - 1] == b[j - 1]:
                    # Matching characters transfer the diagonal state unchanged.
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    # Different characters force one weighted discard.
                    dp[i][j] = min(dp[i - 1][j] + ord(a[i - 1]), dp[i][j - 1] + ord(b[j - 1]))
        return dp[la][lb]
