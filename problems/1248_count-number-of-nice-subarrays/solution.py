from typing import List, Optional


class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        n = len(nums)
        counts = [0] * (n + 1)
        counts[0] = 1
        odds = 0
        result = 0
        for x in nums:
            odds += x & 1
            if odds - k >= 0:
                result += counts[odds - k]
            counts[odds] += 1
        return result
