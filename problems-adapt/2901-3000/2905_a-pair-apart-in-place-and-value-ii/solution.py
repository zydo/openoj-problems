from typing import List


class Solution:
    def farApartPair(self, nums: List[int], indexGap: int, valueGap: int) -> List[int]:
        # For each later index j, every legal partner t satisfies
        # t <= j - indexGap, and the largest |nums[t] - nums[j]| over
        # that window is attained at its minimum or maximum, so remembering
        # the first index of each extreme as the window grows is enough.
        # Testing the minimum candidate before the maximum, and keeping
        # first occurrences on ties, pins one deterministic answer out of
        # the many the statement permits.
        n = len(nums)
        min_idx = -1
        max_idx = -1
        for j in range(n):
            t = j - indexGap
            if t < 0:
                continue
            if min_idx == -1 or nums[t] < nums[min_idx]:
                min_idx = t
            if max_idx == -1 or nums[t] > nums[max_idx]:
                max_idx = t
            if abs(nums[j] - nums[min_idx]) >= valueGap:
                return [min_idx, j]
            if abs(nums[j] - nums[max_idx]) >= valueGap:
                return [max_idx, j]
        return [-1, -1]
