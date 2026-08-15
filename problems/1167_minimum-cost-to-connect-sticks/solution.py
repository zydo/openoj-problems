from typing import List, Optional
import heapq


class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        if len(sticks) <= 1:
            return 0
        heap = list(sticks)
        heapq.heapify(heap)
        total = 0
        while len(heap) > 1:
            combined = heapq.heappop(heap) + heapq.heappop(heap)
            total += combined
            heapq.heappush(heap, combined)
        return total
