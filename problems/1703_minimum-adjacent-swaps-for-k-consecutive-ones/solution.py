from typing import List, Optional


class Solution:
    def minMoves(self, nums: List[int], k: int) -> int:
        if k <= 1:
            return 0
        pos = [i for i, v in enumerate(nums) if v == 1]
        m = len(pos)
        q = [pos[i] - i for i in range(m)]
        pref = [0] * (m + 1)
        for i in range(m):
            pref[i + 1] = pref[i] + q[i]
        best = float("inf")
        for i in range(m - k + 1):
            mid = i + k // 2
            left = q[mid] * (mid - i) - (pref[mid] - pref[i])
            right = (pref[i + k] - pref[mid + 1]) - q[mid] * (i + k - 1 - mid)
            cost = left + right
            if cost < best:
                best = cost
        return best
