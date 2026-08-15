from typing import List, Optional


class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        padded = [1] + nums + [1]
        m = len(padded)
        dp = [[0] * m for _ in range(m)]
        for length in range(1, m - 1):
            for left in range(1, m - length):
                right = left + length - 1
                for k in range(left, right + 1):
                    coins = (
                        padded[left - 1] * padded[k] * padded[right + 1]
                        + dp[left][k - 1]
                        + dp[k + 1][right]
                    )
                    if coins > dp[left][right]:
                        dp[left][right] = coins
        return dp[1][m - 2]
