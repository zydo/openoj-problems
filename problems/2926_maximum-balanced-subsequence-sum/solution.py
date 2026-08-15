from typing import List, Optional


class Solution:
    def maxBalancedSubsequenceSum(self, nums: List[int]) -> int:
        n = len(nums)
        vals = [nums[i] - i for i in range(n)]
        comp = sorted(set(vals))
        m = len(comp)
        idx_of = {v: i + 1 for i, v in enumerate(comp)}

        bit = [0] * (m + 1)

        def update(i, value):
            while i <= m:
                if value > bit[i]:
                    bit[i] = value
                i += i & -i

        def query(i):
            best = 0
            while i > 0:
                if bit[i] > best:
                    best = bit[i]
                i -= i & -i
            return best

        ans = None
        for i in range(n):
            j = idx_of[vals[i]]
            best = query(j)
            dp = nums[i] if best <= 0 else nums[i] + best
            if ans is None or dp > ans:
                ans = dp
            update(j, dp)
        return ans
