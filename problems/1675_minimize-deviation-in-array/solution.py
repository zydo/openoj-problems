from typing import List, Optional
import heapq


class Solution:
    def minimumDeviation(self, nums: List[int]) -> int:
        heap = [-(v * 2 if v % 2 else v) for v in nums]
        heapq.heapify(heap)
        current_min = min(-v for v in heap)
        best = (-heap[0]) - current_min
        while heap[0] % 2 == 0:
            top = -heapq.heappop(heap)
            half = top // 2
            heapq.heappush(heap, -half)
            if half < current_min:
                current_min = half
            deviation = (-heap[0]) - current_min
            if deviation < best:
                best = deviation
        return best
