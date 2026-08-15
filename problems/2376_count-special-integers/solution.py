from typing import List, Optional


class Solution:
    def countSpecialNumbers(self, n: int) -> int:
        def perm(a, k):
            p = 1
            for i in range(k):
                p *= a - i
            return p

        digits = [int(ch) for ch in str(n)]
        L = len(digits)
        total = 0
        for k in range(1, L):
            total += 9 * perm(9, k - 1)
        used = 0
        for i, d in enumerate(digits):
            for x in range(1 if i == 0 else 0, d):
                if not (used >> x) & 1:
                    total += perm(10 - (i + 1), L - i - 1)
            if (used >> d) & 1:
                break
            used |= 1 << d
        else:
            total += 1
        return total
