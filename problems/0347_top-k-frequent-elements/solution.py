from typing import List, Optional


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {}
        for x in nums:
            counts[x] = counts.get(x, 0) + 1
        ordered = sorted(counts.items(), key=lambda item: (-item[1], item[0]))
        return [x for x, _ in ordered[:k]]
