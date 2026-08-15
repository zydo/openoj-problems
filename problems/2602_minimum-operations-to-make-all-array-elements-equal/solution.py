from typing import List, Optional

from bisect import bisect_left


class Solution:
    def minOperations(self, nums: List[int], queries: List[int]) -> List[int]:
        nums = sorted(nums)
        n = len(nums)
        prefix = [0] * (n + 1)
        for i, x in enumerate(nums):
            prefix[i + 1] = prefix[i] + x
        out = []
        for q in queries:
            j = bisect_left(nums, q)
            left = q * j - prefix[j]
            right = (prefix[n] - prefix[j]) - q * (n - j)
            out.append(left + right)
        return out
