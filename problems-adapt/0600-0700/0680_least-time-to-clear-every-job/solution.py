from math import isqrt


class Solution:
    def leastTime(self, factors: list[int], jobs: int) -> int:
        def feasible(t):
            # Within budget t, a rank-r mechanic finishes r*n^2 <= t jobs, so
            # its capacity is isqrt(t // r); the check sums capacities and
            # exits early once the demand is covered.
            total = 0
            for r in factors:
                total += isqrt(t // r)
                if total >= jobs:
                    return True
            return total >= jobs

        # Feasibility is monotone in t (mechanics can idle), so binary search
        # the minimum feasible time. Upper bound: the best mechanic repairing
        # every car alone, min(factors) * jobs^2.
        lo, hi = 1, min(factors) * jobs * jobs
        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(mid):
                hi = mid
            else:
                lo = mid + 1
        return lo
