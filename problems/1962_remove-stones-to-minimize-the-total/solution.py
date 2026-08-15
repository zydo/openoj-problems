from typing import List, Optional
import heapq


class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        heap = [-p for p in piles]
        heapq.heapify(heap)
        for _ in range(k):
            top = -heap[0]
            if top == 1:
                break
            heapq.heapreplace(heap, -(top - top // 2))
        return -sum(heap)
