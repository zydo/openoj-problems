from typing import List, Optional


class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        price = sorted(price)

        def feasible(x):
            count = 1
            last = price[0]
            for p in price[1:]:
                if p - last >= x:
                    count += 1
                    last = p
            return count >= k

        lo, hi = 0, price[-1] - price[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if feasible(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
