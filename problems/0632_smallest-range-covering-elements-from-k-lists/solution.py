from typing import List, Optional
import heapq


class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        heap = [(lst[0], i, 0) for i, lst in enumerate(nums)]
        heapq.heapify(heap)
        cur_max = max(lst[0] for lst in nums)
        best_lo, best_hi = float("-inf"), float("inf")
        while True:
            lo, i, j = heapq.heappop(heap)
            if cur_max - lo < best_hi - best_lo or (
                cur_max - lo == best_hi - best_lo and lo < best_lo
            ):
                best_lo, best_hi = lo, cur_max
            if j + 1 == len(nums[i]):
                return [best_lo, best_hi]
            nxt = nums[i][j + 1]
            if nxt > cur_max:
                cur_max = nxt
            heapq.heappush(heap, (nxt, i, j + 1))
