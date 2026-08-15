from bisect import bisect_right
from typing import List


class Solution:
    def minOperations(self, nums: List[int]) -> int:
        tails = []
        for x in nums:
            v = -x
            pos = bisect_right(tails, v)
            if pos == len(tails):
                tails.append(v)
            else:
                tails[pos] = v
        return len(tails)
