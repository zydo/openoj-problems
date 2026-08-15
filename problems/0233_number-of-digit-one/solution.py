from typing import List, Optional


class Solution:
    def countDigitOne(self, n: int) -> int:
        if n <= 0:
            return 0
        count = 0
        factor = 1
        while factor <= n:
            higher = n // (factor * 10)
            current = (n // factor) % 10
            lower = n % factor
            if current == 0:
                count += higher * factor
            elif current == 1:
                count += higher * factor + lower + 1
            else:
                count += (higher + 1) * factor
            factor *= 10
        return count
