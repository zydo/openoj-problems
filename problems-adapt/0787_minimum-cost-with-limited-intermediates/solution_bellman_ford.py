from typing import List, Optional


class Solution:
    def minimumLimitedRouteCost(self, nodeCount: int, links: List[List[int]], source: int, target: int, maxIntermediates: int) -> int:
        INF = float("inf")
        # After r full rounds, dist[v] is the cheapest cost using at
        # most r edges; maxIntermediates internal nodes allow maxIntermediates+1 links, so run maxIntermediates+1 rounds.
        dist = [INF] * nodeCount
        dist[source] = 0
        for _ in range(maxIntermediates + 1):
            # Relax from a frozen copy: writing in place would chain
            # several edges inside one round and exceed the stop limit.
            ndist = dist[:]
            changed = False
            for f, t, weight in links:
                if dist[f] + weight < ndist[t]:
                    ndist[t] = dist[f] + weight
                    changed = True
            dist = ndist
            # A round that changed nothing never improves later rounds.
            if not changed:
                break
        # Positive weights need no negative-cycle handling; a
        # surviving infinity means the destination is unreachable
        # within the allowance.
        return -1 if dist[target] == INF else dist[target]
