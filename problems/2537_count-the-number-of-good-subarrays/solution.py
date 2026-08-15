from typing import List, Optional


class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        count = {}
        pairs = 0
        ans = 0
        left = 0
        n = len(nums)
        for right in range(n):
            x = nums[right]
            pairs += count.get(x, 0)
            count[x] = count.get(x, 0) + 1
            while pairs >= k:
                ans += n - right
                y = nums[left]
                count[y] -= 1
                pairs -= count[y]
                left += 1
        return ans
