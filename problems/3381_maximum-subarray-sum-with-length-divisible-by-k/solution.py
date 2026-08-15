from typing import List, Optional


class Solution:
    def maxSubarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]
        inf = float("inf")
        min_pref = {}
        best = None
        for i in range(n + 1):
            r = i % k
            if r in min_pref:
                cand = prefix[i] - min_pref[r]
                if best is None or cand > best:
                    best = cand
            if prefix[i] < min_pref.get(r, inf):
                min_pref[r] = prefix[i]
        return best
