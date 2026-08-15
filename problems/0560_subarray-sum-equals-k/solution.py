from typing import List, Optional


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_counts = {0: 1}
        running = 0
        total = 0
        for value in nums:
            running += value
            total += prefix_counts.get(running - k, 0)
            prefix_counts[running] = prefix_counts.get(running, 0) + 1
        return total
