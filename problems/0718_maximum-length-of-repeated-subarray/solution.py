from typing import List, Optional


class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        m, n = len(nums1), len(nums2)
        dp = [0] * (n + 1)
        best = 0
        for i in range(m - 1, -1, -1):
            new = [0] * (n + 1)
            for j in range(n - 1, -1, -1):
                if nums1[i] == nums2[j]:
                    new[j] = dp[j + 1] + 1
                    if new[j] > best:
                        best = new[j]
            dp = new
        return best
