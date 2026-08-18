from typing import List, Optional


class Solution:
    def leftmostLocalMaximum(self, nums: List[int]) -> int:
        n = len(nums)
        # Scan left to right and stop at the first descent - the direct route to
        # the leftmost qualifying index, which halving search cannot guarantee.
        for i in range(n):
            # There is no neighbour beyond either end, so the
            # edge tests pass vacuously there.
            left_ok = i == 0 or nums[i] > nums[i - 1]
            right_ok = i == n - 1 or nums[i] > nums[i + 1]
            if left_ok and right_ok:
                return i
        # Unreachable: a qualifying index always exists.
        return -1
