from typing import List, Optional


class Solution:
    def findMaxSum(self, nums1: List[int], nums2: List[int], k: int) -> List[int]:
        import heapq

        n = len(nums1)
        indices = sorted(range(n), key=lambda i: nums1[i])
        heap = []
        total = 0
        result = [0] * n
        i = 0
        while i < n:
            j = i
            while j < n and nums1[indices[j]] == nums1[indices[i]]:
                j += 1
            for t in range(i, j):
                result[indices[t]] = total
            for t in range(i, j):
                val = nums2[indices[t]]
                if len(heap) < k:
                    heapq.heappush(heap, val)
                    total += val
                elif val > heap[0]:
                    total += val - heapq.heapreplace(heap, val)
            i = j
        return result
