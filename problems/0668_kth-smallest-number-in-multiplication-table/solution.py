from typing import List, Optional


class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        def count_at_most(x):
            total = 0
            for i in range(1, m + 1):
                total += min(x // i, n)
                if total >= k:
                    return True
            return total >= k

        lo, hi = 1, m * n
        while lo < hi:
            mid = (lo + hi) // 2
            if count_at_most(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
