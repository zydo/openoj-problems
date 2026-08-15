from typing import List, Optional

MOD = 1_000_000_007
_MAX = 20000


def _build_factorials(max_n):
    fact = [1] * (max_n + 1)
    for i in range(1, max_n + 1):
        fact[i] = fact[i - 1] * i % MOD
    inv_fact = [1] * (max_n + 1)
    inv_fact[max_n] = pow(fact[max_n], MOD - 2, MOD)
    for i in range(max_n, 0, -1):
        inv_fact[i - 1] = inv_fact[i] * i % MOD
    return fact, inv_fact


_FACT, _INV_FACT = _build_factorials(_MAX)


def _comb(n, r):
    if r < 0 or r > n:
        return 0
    return _FACT[n] * _INV_FACT[r] % MOD * _INV_FACT[n - r] % MOD


def _prime_exponents(k):
    exponents = []
    d = 2
    while d * d <= k:
        if k % d == 0:
            count = 0
            while k % d == 0:
                k //= d
                count += 1
            exponents.append(count)
        d += 1
    if k > 1:
        exponents.append(1)
    return exponents


class Solution:
    def waysToFillArray(self, queries: List[List[int]]) -> List[int]:
        answers = []
        for n, k in queries:
            ways = 1
            for exponent in _prime_exponents(k):
                ways = ways * _comb(exponent + n - 1, n - 1) % MOD
            answers.append(ways)
        return answers
