from typing import List


class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        best = abs(nums[0] - k)
        current = {0}
        for value in nums:
            nxt = {value}
            for prev in current:
                nxt.add(prev | value)
            current = nxt
            for x in current:
                diff = abs(x - k)
                if diff < best:
                    best = diff
        return best
