from typing import List, Optional


class Solution:
    def firstDayBeenInAllRooms(self, nextVisit: List[int]) -> int:
        MOD = 10**9 + 7
        n = len(nextVisit)
        f = [0] * n
        for i in range(1, n):
            f[i] = (2 * f[i - 1] - f[nextVisit[i - 1]] + 2) % MOD
        return f[n - 1] % MOD
