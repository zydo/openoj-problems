from typing import List, Optional


class Solution:
    def maxCompatibilitySum(
        self, students: List[List[int]], mentors: List[List[int]]
    ) -> int:
        m = len(students)
        score = [
            [sum(a == b for a, b in zip(students[i], mentors[j])) for j in range(m)]
            for i in range(m)
        ]
        full = 1 << m
        dp = [0] * full
        for mask in range(1, full):
            i = bin(mask).count("1") - 1
            best = 0
            for j in range(m):
                if mask >> j & 1:
                    best = max(best, dp[mask ^ (1 << j)] + score[i][j])
            dp[mask] = best
        return dp[full - 1]
