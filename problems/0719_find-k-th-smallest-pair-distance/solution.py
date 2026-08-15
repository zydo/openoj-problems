from typing import List


class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        nums = sorted(nums)
        n = len(nums)

        def count_le(dist):
            cnt = 0
            j = 0
            for i in range(n):
                while j < n and nums[j] - nums[i] <= dist:
                    j += 1
                cnt += j - i - 1
            return cnt

        lo, hi = 0, nums[-1] - nums[0]
        while lo < hi:
            mid = (lo + hi) // 2
            if count_le(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
