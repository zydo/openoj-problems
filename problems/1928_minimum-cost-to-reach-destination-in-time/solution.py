from typing import List, Optional


class Solution:
    def minCost(
        self, maxTime: int, edges: List[List[int]], passingFees: List[int]
    ) -> int:
        n = len(passingFees)
        INF = float("inf")
        layers = [None] * (maxTime + 1)
        start = [INF] * n
        start[0] = passingFees[0]
        layers[0] = start
        for t in range(1, maxTime + 1):
            cur = [INF] * n
            for x, y, dt in edges:
                if dt > t:
                    continue
                prev = layers[t - dt]
                if prev[x] + passingFees[y] < cur[y]:
                    cur[y] = prev[x] + passingFees[y]
                if prev[y] + passingFees[x] < cur[x]:
                    cur[x] = prev[y] + passingFees[x]
            layers[t] = cur
        best = min(layer[n - 1] for layer in layers)
        return best if best < INF else -1
