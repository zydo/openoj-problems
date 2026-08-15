from typing import List, Optional


class Solution:
    def findMaximumNumber(self, k: int, x: int) -> int:
        def price_sum(n):
            total = 0
            p = x
            while (1 << (p - 1)) <= n:
                b = p - 1
                cycle = 1 << (b + 1)
                full = (n + 1) // cycle
                rem = (n + 1) % cycle
                half = 1 << b
                total += full * half + max(0, rem - half)
                p += x
            return total

        lo, hi = 0, 10**16
        while price_sum(hi) <= k:
            hi *= 2
        while lo + 1 < hi:
            mid = (lo + hi) // 2
            if price_sum(mid) <= k:
                lo = mid
            else:
                hi = mid
        return lo
