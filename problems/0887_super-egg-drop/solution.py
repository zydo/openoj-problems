from typing import List, Optional


class Solution:
    def superEggDrop(self, k: int, n: int) -> int:
        dp = [0] * (k + 1)
        moves = 0
        while dp[k] < n:
            moves += 1
            for e in range(k, 0, -1):
                dp[e] = dp[e - 1] + dp[e] + 1
        return moves
