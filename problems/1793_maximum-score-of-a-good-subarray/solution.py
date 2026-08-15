from typing import List, Optional


class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        n = len(nums)
        best = nums[k]
        lo = hi = k
        cur_min = nums[k]
        while lo > 0 or hi < n - 1:
            if lo == 0:
                hi += 1
                cand = nums[hi]
            elif hi == n - 1:
                lo -= 1
                cand = nums[lo]
            elif nums[lo - 1] >= nums[hi + 1]:
                lo -= 1
                cand = nums[lo]
            else:
                hi += 1
                cand = nums[hi]
            if cand < cur_min:
                cur_min = cand
            score = cur_min * (hi - lo + 1)
            if score > best:
                best = score
        return best
