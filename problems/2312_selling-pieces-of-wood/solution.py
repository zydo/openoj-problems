from typing import List, Optional


class Solution:
    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:
        price = [[0] * (n + 1) for _ in range(m + 1)]
        for h, w, p in prices:
            if price[h][w] < p:
                price[h][w] = p
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                best = price[i][j]
                row = dp[i]
                for h in range(1, i // 2 + 1):
                    v = dp[h][j] + dp[i - h][j]
                    if v > best:
                        best = v
                for w in range(1, j // 2 + 1):
                    v = row[w] + row[j - w]
                    if v > best:
                        best = v
                dp[i][j] = best
        return dp[m][n]
