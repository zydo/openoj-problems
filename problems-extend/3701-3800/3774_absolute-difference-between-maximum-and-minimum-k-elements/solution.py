from typing import List


class Solution:
    def absDifference(self, nums: List[int], k: int) -> int:
        # After sorting, the k smallest elements occupy the front of the
        # array and the k largest the back; equal values may straddle the
        # cut, but their contribution to each sum is unchanged.
        nums.sort()
        return sum(nums[-k:]) - sum(nums[:k])
