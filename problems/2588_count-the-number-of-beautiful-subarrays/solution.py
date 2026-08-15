from typing import List, Optional


class Solution:
    def beautifulSubarrays(self, nums: List[int]) -> int:
        count = {}
        count[0] = 1
        x = 0
        ans = 0
        for v in nums:
            x ^= v
            ans += count.get(x, 0)
            count[x] = count.get(x, 0) + 1
        return ans
