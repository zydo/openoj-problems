from typing import List, Optional


class Solution:
    def mergeStones(self, stones: List[int], k: int) -> int:
        n = len(stones)
        if (n - 1) % (k - 1) != 0:
            return -1
        INF = float("inf")
        prefix = [0] * (n + 1)
        for i, x in enumerate(stones):
            prefix[i + 1] = prefix[i] + x
        dp = [[[INF] * (k + 1) for _ in range(n)] for _ in range(n)]
        for i in range(n):
            dp[i][i][1] = 0
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                for m in range(2, k + 1):
                    for mid in range(i, j):
                        if dp[i][mid][1] < INF and dp[mid + 1][j][m - 1] < INF:
                            dp[i][j][m] = min(
                                dp[i][j][m],
                                dp[i][mid][1] + dp[mid + 1][j][m - 1],
                            )
                if dp[i][j][k] < INF:
                    dp[i][j][1] = dp[i][j][k] + prefix[j + 1] - prefix[i]
        return dp[0][n - 1][1] if dp[0][n - 1][1] < INF else -1
