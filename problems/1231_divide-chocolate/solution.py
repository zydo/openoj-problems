from typing import List, Optional


class Solution:
    def maximizeSweetness(self, sweetness: List[int], k: int) -> int:
        def pieces_at_least(target):
            count = 0
            current = 0
            for value in sweetness:
                current += value
                if current >= target:
                    count += 1
                    current = 0
            return count

        lo, hi = 1, sum(sweetness) // (k + 1)
        best = 0
        while lo <= hi:
            mid = (lo + hi) // 2
            if pieces_at_least(mid) >= k + 1:
                best = mid
                lo = mid + 1
            else:
                hi = mid - 1
        return best
