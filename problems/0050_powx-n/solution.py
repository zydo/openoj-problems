from typing import List, Optional


class Solution:
    def myPow(self, x: float, n: int) -> float:
        def power(base: float, exp: int) -> float:
            result = 1.0
            while exp:
                if exp & 1:
                    result *= base
                base *= base
                exp >>= 1
            return result

        if n < 0:
            return 1.0 / power(x, -n)
        return power(x, n)
