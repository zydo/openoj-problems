from typing import List, Optional
import heapq


class Solution:
    def halveArray(self, nums: List[int]) -> int:
        total = sum(nums)
        heap = [-float(x) for x in nums]
        heapq.heapify(heap)
        target = total / 2.0
        ops = 0
        while target > 0:
            largest = -heapq.heappop(heap)
            half = largest / 2.0
            target -= half
            heapq.heappush(heap, -half)
            ops += 1
        return ops
