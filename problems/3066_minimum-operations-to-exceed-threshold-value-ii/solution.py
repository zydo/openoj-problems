from typing import List, Optional

import heapq


class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        h = list(nums)
        heapq.heapify(h)
        operations = 0
        while len(h) >= 2 and h[0] < k:
            x = heapq.heappop(h)
            y = heapq.heappop(h)
            heapq.heappush(h, x * 2 + y)
            operations += 1
        return operations
