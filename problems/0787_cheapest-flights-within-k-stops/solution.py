from typing import List, Optional


class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, k: int
    ) -> int:
        INF = float("inf")
        dist = [INF] * n
        dist[src] = 0
        for _ in range(k + 1):
            ndist = dist[:]
            changed = False
            for f, t, price in flights:
                if dist[f] + price < ndist[t]:
                    ndist[t] = dist[f] + price
                    changed = True
            dist = ndist
            if not changed:
                break
        return -1 if dist[dst] == INF else dist[dst]
