from typing import List, Optional
import heapq


class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        pairs = sorted(zip(nums2, nums1), reverse=True)
        heap = []
        total = 0
        best = 0
        for b, a in pairs:
            heapq.heappush(heap, a)
            total += a
            if len(heap) > k:
                total -= heapq.heappop(heap)
            if len(heap) == k:
                best = max(best, total * b)
        return best
