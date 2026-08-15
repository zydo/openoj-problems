from typing import List, Optional


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        dp = list(triangle[-1])
        for row in range(len(triangle) - 2, -1, -1):
            for i in range(len(triangle[row])):
                dp[i] = triangle[row][i] + min(dp[i], dp[i + 1])
        return dp[0]
