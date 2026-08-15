from typing import List, Optional


class Solution:
    def countTheNumOfKFreeSubsets(self, nums: List[int], k: int) -> int:
        nums = sorted(nums)
        group_of = {}
        lengths = []
        for x in nums:
            if x - k in group_of:
                gid = group_of[x - k]
                group_of[x] = gid
                lengths[gid] += 1
            else:
                group_of[x] = len(lengths)
                lengths.append(1)
        ans = 1
        for length in lengths:
            a, b = 1, 1
            for _ in range(length):
                a, b = b, a + b
            ans *= b
        return ans
