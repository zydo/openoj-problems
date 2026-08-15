from typing import List, Optional


class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        dp = [0] * (n + 1)
        for i in range(n - 1, -1, -1):
            points, brainpower = questions[i]
            nxt = i + brainpower + 1
            take = points + (dp[nxt] if nxt <= n else 0)
            dp[i] = max(dp[i + 1], take)
        return dp[0]
