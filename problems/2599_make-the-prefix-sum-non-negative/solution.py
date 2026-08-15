from typing import List, Optional

import heapq


class Solution:
    def makePrefSumNonNegative(self, nums: List[int]) -> int:
        heap = []
        prefix = 0
        ops = 0
        for num in nums:
            prefix += num
            heapq.heappush(heap, num)
            while prefix < 0:
                prefix -= heapq.heappop(heap)
                ops += 1
        return ops
