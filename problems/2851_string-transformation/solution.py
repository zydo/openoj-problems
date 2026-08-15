from typing import List, Optional

MOD = 10**9 + 7


class Solution:
    def numberOfWays(self, s: str, t: str, k: int) -> int:
        def _count_rotations(s, t):
            n = len(s)
            pi = [0] * n
            for i in range(1, n):
                j = pi[i - 1]
                while j > 0 and t[i] != t[j]:
                    j = pi[j - 1]
                if t[i] == t[j]:
                    j += 1
                pi[i] = j

            s2 = s + s
            cnt = 0
            j = 0
            for i in range(2 * n - 1):
                c = s2[i]
                while j > 0 and c != t[j]:
                    j = pi[j - 1]
                if c == t[j]:
                    j += 1
                if j == n:
                    cnt += 1
                    j = pi[j - 1]
            return cnt

        def _mat_mul(a, b):
            return [
                [
                    (a[0][0] * b[0][0] + a[0][1] * b[1][0]) % MOD,
                    (a[0][0] * b[0][1] + a[0][1] * b[1][1]) % MOD,
                ],
                [
                    (a[1][0] * b[0][0] + a[1][1] * b[1][0]) % MOD,
                    (a[1][0] * b[0][1] + a[1][1] * b[1][1]) % MOD,
                ],
            ]

        def _mat_pow(m, p):
            r = [[1, 0], [0, 1]]
            while p:
                if p & 1:
                    r = _mat_mul(r, m)
                m = _mat_mul(m, m)
                p >>= 1
            return r

        n = len(s)
        cnt = _count_rotations(s, t)
        mat = [
            [(cnt - 1) % MOD, cnt % MOD],
            [(n - cnt) % MOD, (n - 1 - cnt) % MOD],
        ]
        mk = _mat_pow(mat, k)
        v0 = 1 if s == t else 0
        v1 = 1 - v0
        return (mk[0][0] * v0 + mk[0][1] * v1) % MOD
