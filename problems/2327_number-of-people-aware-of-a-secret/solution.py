from typing import List, Optional


class Solution:
    def peopleAwareOfSecret(self, n: int, delay: int, forget: int) -> int:
        MOD = 10**9 + 7
        know = [0] * (n + 1)
        know[1] = 1
        for day in range(2, n + 1):
            total = 0
            for d in range(max(1, day - forget + 1), day - delay + 1):
                total += know[d]
            know[day] = total % MOD
        return sum(know[n - forget + 1 : n + 1]) % MOD
