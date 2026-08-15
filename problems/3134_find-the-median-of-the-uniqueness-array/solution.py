from typing import List


class Solution:
    def medianOfUniquenessArray(self, nums: List[int]) -> int:
        n = len(nums)
        length = n * (n + 1) // 2
        target_rank = (length + 1) // 2

        def count_at_most(x):
            freq = {}
            left = 0
            result = 0
            for right, value in enumerate(nums):
                freq[value] = freq.get(value, 0) + 1
                while len(freq) > x:
                    out = nums[left]
                    freq[out] -= 1
                    if freq[out] == 0:
                        del freq[out]
                    left += 1
                result += right - left + 1
            return result

        lo, hi = 1, n
        while lo < hi:
            mid = (lo + hi) // 2
            if count_at_most(mid) >= target_rank:
                hi = mid
            else:
                lo = mid + 1
        return lo
