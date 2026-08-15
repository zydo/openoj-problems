from typing import List, Optional


class Solution:
    def getPermutationIndex(self, perm: List[int]) -> int:
        MOD = 1_000_000_007
        n = len(perm)
        fact = [1] * n
        for i in range(1, n):
            fact[i] = fact[i - 1] * i % MOD

        tree = [0] * (n + 1)

        def add(i, delta):
            while i <= n:
                tree[i] += delta
                i += i & -i

        def query(i):
            s = 0
            while i > 0:
                s += tree[i]
                i -= i & -i
            return s

        for v in range(1, n + 1):
            add(v, 1)

        ans = 0
        for i, x in enumerate(perm):
            smaller = query(x - 1)
            ans = (ans + smaller * fact[n - 1 - i]) % MOD
            add(x, -1)
        return ans
