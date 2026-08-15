from typing import List, Optional


class Solution:
    def kthSmallestSubarraySum(self, nums: List[int], k: int) -> int:
        def count_at_most(limit):
            total = 0
            window_sum = 0
            left = 0
            for right, value in enumerate(nums):
                window_sum += value
                while window_sum > limit:
                    window_sum -= nums[left]
                    left += 1
                total += right - left + 1
            return total

        lo, hi = min(nums), sum(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if count_at_most(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
