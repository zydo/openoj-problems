from typing import List, Optional


class Solution:
    def onceTwice(self, nums: List[int]) -> List[int]:
        from collections import Counter

        counts = Counter(nums)
        once = twice = 0
        for value, count in counts.items():
            if count == 1:
                once = value
            elif count == 2:
                twice = value
        return [once, twice]
