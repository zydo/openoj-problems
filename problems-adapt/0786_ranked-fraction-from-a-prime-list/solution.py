from typing import List, Optional


class Solution:
    def rankedPrimeFraction(self, values: List[int], rank: int) -> List[int]:
        n = len(values)
        lo, hi = 0.0, 1.0
        ans = [values[0], values[-1]]
        # Binary search on the fraction value; count fractions <= mid.
        for _ in range(50):
            mid = (lo + hi) / 2.0
            count = 0
            best = 0.0
            best_pair = (values[0], values[-1])
            j = 1
            for i in range(n - 1):
                while j < n and values[i] > mid * values[j]:
                    j += 1
                count += n - j
                if j < n:
                    val = values[i] / values[j]
                    if val > best:
                        best = val
                        best_pair = (values[i], values[j])
            if count >= rank:
                hi = mid
                ans = list(best_pair)
            else:
                lo = mid
        return ans
