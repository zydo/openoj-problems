from typing import List, Optional


class Solution:
    def nthUglyNumber(self, n: int) -> int:
        ugly = [0] * (n + 1)
        ugly[0] = 1
        i2 = i3 = i5 = 0
        for i in range(1, n + 1):
            m2, m3, m5 = ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5
            nxt = min(m2, m3, m5)
            ugly[i] = nxt
            if nxt == m2:
                i2 += 1
            if nxt == m3:
                i3 += 1
            if nxt == m5:
                i5 += 1
        return ugly[n - 1]
