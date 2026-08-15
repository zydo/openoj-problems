from typing import List, Optional


class Solution:
    def longestDupSubstring(self, s: str) -> str:
        n = len(s)
        a = [ord(c) - 97 for c in s]
        MOD1 = 10**9 + 7
        MOD2 = 10**9 + 9
        BASE = 26

        pow1 = [1] * (n + 1)
        pow2 = [1] * (n + 1)
        for i in range(1, n + 1):
            pow1[i] = pow1[i - 1] * BASE % MOD1
            pow2[i] = pow2[i - 1] * BASE % MOD2

        def check(length):
            if length == 0:
                return -1
            h1 = h2 = 0
            for i in range(length):
                h1 = (h1 * BASE + a[i]) % MOD1
                h2 = (h2 * BASE + a[i]) % MOD2
            seen = {(h1, h2): [0]}
            for i in range(1, n - length + 1):
                h1 = (
                    (h1 - a[i - 1] * pow1[length - 1]) % MOD1 * BASE + a[i + length - 1]
                ) % MOD1
                h2 = (
                    (h2 - a[i - 1] * pow2[length - 1]) % MOD2 * BASE + a[i + length - 1]
                ) % MOD2
                key = (h1, h2)
                if key in seen:
                    window = a[i : i + length]
                    for start in seen[key]:
                        if a[start : start + length] == window:
                            return i
                    seen[key].append(i)
                else:
                    seen[key] = [i]
            return -1

        lo, hi = 1, n
        best_length = 0
        best_start = -1
        while lo <= hi:
            mid = (lo + hi) // 2
            idx = check(mid)
            if idx != -1:
                best_length = mid
                best_start = idx
                lo = mid + 1
            else:
                hi = mid - 1

        if best_length == 0:
            return ""
        return s[best_start : best_start + best_length]
