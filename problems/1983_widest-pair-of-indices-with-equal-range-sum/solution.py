from typing import List, Optional


class Solution:
    def widestPairOfIndices(self, nums1: List[int], nums2: List[int]) -> int:
        first = {0: -1}
        diff = 0
        best = 0
        for i, (a, b) in enumerate(zip(nums1, nums2)):
            diff += a - b
            if diff in first:
                best = max(best, i - first[diff])
            else:
                first[diff] = i
        return best
