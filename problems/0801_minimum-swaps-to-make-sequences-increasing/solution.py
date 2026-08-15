from typing import List, Optional


class Solution:
    def minSwap(self, nums1: List[int], nums2: List[int]) -> int:
        n = len(nums1)
        keep, swap = 0, 1
        for i in range(1, n):
            nkeep = nswap = float("inf")
            a1, b1 = nums1[i - 1], nums2[i - 1]
            a2, b2 = nums1[i], nums2[i]
            if a1 < a2 and b1 < b2:
                nkeep = min(nkeep, keep)
                nswap = min(nswap, swap + 1)
            if a1 < b2 and b1 < a2:
                nkeep = min(nkeep, swap)
                nswap = min(nswap, keep + 1)
            keep, swap = nkeep, nswap
        return min(keep, swap)
