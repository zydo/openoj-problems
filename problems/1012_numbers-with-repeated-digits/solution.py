from typing import List, Optional


class Solution:
    def numDupDigitsAtMostN(self, n: int) -> int:
        digits = list(map(int, str(n)))
        length = len(digits)

        def distinct_count(d):
            prod = 9
            for i in range(1, d):
                prod *= 10 - i
            return prod

        distinct = 0
        for d in range(1, length):
            distinct += distinct_count(d)

        used = set()
        for i, digit in enumerate(digits):
            start = 1 if i == 0 else 0
            smaller = sum(1 for cand in range(start, digit) if cand not in used)
            remaining = length - i - 1
            perms = 1
            avail = 10 - (i + 1)
            for _ in range(remaining):
                perms *= avail
                avail -= 1
            distinct += smaller * perms
            if digit in used:
                break
            used.add(digit)
        else:
            distinct += 1

        return n - distinct
