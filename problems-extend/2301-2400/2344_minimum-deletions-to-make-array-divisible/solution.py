from math import gcd
from typing import List


class Solution:
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        g = 0
        for value in numsDivide:
            g = gcd(g, value)
        nums.sort()
        for index, value in enumerate(nums):
            if g % value == 0:
                return index
        return -1
