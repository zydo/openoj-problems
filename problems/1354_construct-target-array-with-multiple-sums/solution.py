from typing import List, Optional

import heapq


class Solution:
    def isPossible(self, target: List[int]) -> bool:
        n = len(target)
        if n == 1:
            return target[0] == 1
        total = sum(target)
        heap = [-v for v in target]
        heapq.heapify(heap)
        while True:
            largest = -heapq.heappop(heap)
            if largest == 1:
                return True
            rest = total - largest
            if largest <= rest:
                return False
            steps = (largest - 1) // rest
            prev = largest - steps * rest
            heapq.heappush(heap, -prev)
            total = rest + prev
