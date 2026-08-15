from typing import List, Optional


class Solution:
    def preimageSizeFZF(self, k: int) -> int:
        def zeta(x):
            count = 0
            p = 5
            while p <= x:
                count += x // p
                p *= 5
            return count

        lo, hi = 0, 5 * (k + 1) + 10
        while lo < hi:
            mid = (lo + hi) // 2
            if zeta(mid) < k:
                lo = mid + 1
            else:
                hi = mid
        return 5 if zeta(lo) == k else 0
