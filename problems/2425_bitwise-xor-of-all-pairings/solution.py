from typing import List, Optional


class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        answer = 0
        if len(nums2) % 2 == 1:
            for value in nums1:
                answer ^= value
        if len(nums1) % 2 == 1:
            for value in nums2:
                answer ^= value
        return answer
