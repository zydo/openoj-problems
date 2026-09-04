from typing import List


class Solution:
    def firstAbsentMultiple(self, nums: List[int], k: int) -> int:
        # The question is pure membership: drop every value into a hash set,
        # then walk the multiples of k upward until one is absent.
        seen = set(nums)
        candidate = k
        while candidate in seen:
            candidate += k
        return candidate
