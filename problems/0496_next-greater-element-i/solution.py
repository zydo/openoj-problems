from typing import List, Optional


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        next_greater = {}
        stack = []
        for value in nums2:
            while stack and stack[-1] < value:
                next_greater[stack.pop()] = value
            stack.append(value)
        for value in stack:
            next_greater[value] = -1
        return [next_greater[value] for value in nums1]
