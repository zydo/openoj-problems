from typing import List, Optional

import heapq


class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:
        projects = sorted(zip(capital, profits))
        n = len(projects)
        affordable = []  # max-heap of profits (negated)
        index = 0
        current = w
        for _ in range(min(k, n)):
            while index < n and projects[index][0] <= current:
                heapq.heappush(affordable, -projects[index][1])
                index += 1
            if not affordable:
                break
            current += -heapq.heappop(affordable)
        return current
