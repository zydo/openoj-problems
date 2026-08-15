from typing import List, Optional
from itertools import product


class Solution:
    def colorTheGrid(self, m: int, n: int) -> int:
        MOD = 10**9 + 7

        states = [
            col
            for col in product(range(3), repeat=m)
            if all(col[i] != col[i + 1] for i in range(m - 1))
        ]
        compat = [
            [
                j
                for j in range(len(states))
                if all(x != y for x, y in zip(col_a, states[j]))
            ]
            for col_a in states
        ]

        cur = [1] * len(states)
        for _ in range(n - 1):
            nxt = [0] * len(states)
            for i, c in enumerate(cur):
                if c:
                    for j in compat[i]:
                        nxt[j] = (nxt[j] + c) % MOD
            cur = nxt
        return sum(cur) % MOD
