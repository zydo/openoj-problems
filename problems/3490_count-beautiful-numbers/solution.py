from typing import List, Optional
from functools import lru_cache


class Solution:
    def beautifulNumbers(self, l: int, r: int) -> int:
        return self._count(r) - self._count(l - 1)

    def _count(self, x):
        if x <= 0:
            return 0
        digits = [int(c) for c in str(x)]

        @lru_cache(maxsize=None)
        def dp(pos, tight, started, ssum, prod):
            if pos == len(digits):
                return 1 if started and ssum > 0 and prod % ssum == 0 else 0
            limit = digits[pos] if tight else 9
            res = 0
            for d in range(limit + 1):
                nt = tight and (d == limit)
                if not started and d == 0:
                    res += dp(pos + 1, nt, False, 0, 1)
                else:
                    res += dp(pos + 1, nt, True, ssum + d, prod * d)
            return res

        return dp(0, True, False, 0, 1)
