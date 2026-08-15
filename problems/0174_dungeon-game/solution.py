from typing import List, Optional


class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        m = len(dungeon)
        n = len(dungeon[0])
        INF = float("inf")
        need = [[INF] * (n + 1) for _ in range(m + 1)]
        need[m][n - 1] = 1
        for i in range(m - 1, -1, -1):
            for j in range(n - 1, -1, -1):
                best_next = min(need[i + 1][j], need[i][j + 1])
                need[i][j] = max(1, best_next - dungeon[i][j])
        return need[0][0]
