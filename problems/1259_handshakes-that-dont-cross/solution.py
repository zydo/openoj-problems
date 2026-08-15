from typing import List, Optional


class Solution:
    def numberOfWays(self, numPeople: int) -> int:
        MOD = 10**9 + 7
        m = numPeople // 2
        catalan = [0] * (m + 1)
        catalan[0] = 1
        for i in range(1, m + 1):
            total = 0
            for j in range(i):
                total = (total + catalan[j] * catalan[i - 1 - j]) % MOD
            catalan[i] = total
        return catalan[m]
