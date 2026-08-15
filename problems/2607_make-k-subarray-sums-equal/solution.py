from typing import List, Optional

from math import gcd


class Solution:
    def makeSubKSumEqual(self, arr: List[int], k: int) -> int:
        n = len(arr)
        g = gcd(n, k)
        total = 0
        for r in range(g):
            group = sorted(arr[i] for i in range(r, n, g))
            median = group[len(group) // 2]
            total += sum(abs(v - median) for v in group)
        return total
