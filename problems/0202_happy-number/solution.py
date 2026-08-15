from typing import List, Optional


class Solution:
    def isHappy(self, n: int) -> bool:
        def step(m: int) -> int:
            total = 0
            while m:
                m, digit = divmod(m, 10)
                total += digit * digit
            return total

        seen = set()
        while n != 1 and n not in seen:
            seen.add(n)
            n = step(n)
        return n == 1
