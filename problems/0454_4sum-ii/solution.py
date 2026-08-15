from typing import List, Optional


class Solution:
    def fourSumCount(
        self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]
    ) -> int:
        sums = {}
        for a in nums1:
            for b in nums2:
                key = a + b
                sums[key] = sums.get(key, 0) + 1
        total = 0
        for c in nums3:
            for d in nums4:
                total += sums.get(-(c + d), 0)
        return total
