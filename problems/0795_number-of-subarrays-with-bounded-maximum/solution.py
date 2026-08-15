from typing import List, Optional


class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        def count_below(bound):
            total = 0
            run = 0
            for v in nums:
                if v <= bound:
                    run += 1
                    total += run
                else:
                    run = 0
            return total

        return count_below(right) - count_below(left - 1)
