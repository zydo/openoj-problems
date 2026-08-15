import heapq
from typing import List, Optional


class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        n = len(costs)
        if 2 * candidates >= n:
            return sum(sorted(costs)[:k])
        left = [(costs[i], i) for i in range(candidates)]
        right = [(costs[i], i) for i in range(n - candidates, n)]
        heapq.heapify(left)
        heapq.heapify(right)
        i, j = candidates, n - candidates - 1
        total = 0
        for _ in range(k):
            if not right or (left and left[0] <= right[0]):
                cost, _idx = heapq.heappop(left)
                if i <= j:
                    heapq.heappush(left, (costs[i], i))
                    i += 1
            else:
                cost, _idx = heapq.heappop(right)
                if i <= j:
                    heapq.heappush(right, (costs[j], j))
                    j -= 1
            total += cost
        return total
