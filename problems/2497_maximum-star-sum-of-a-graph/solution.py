from typing import List, Optional


class Solution:
    def maxStarSum(self, vals: List[int], edges: List[List[int]], k: int) -> int:
        neighbors = [[] for _ in vals]
        for a, b in edges:
            neighbors[a].append(vals[b])
            neighbors[b].append(vals[a])
        best = max(vals)
        for i, adjacent in enumerate(neighbors):
            adjacent.sort(reverse=True)
            total = vals[i]
            for value in adjacent[:k]:
                if value <= 0:
                    break
                total += value
            if total > best:
                best = total
        return best
