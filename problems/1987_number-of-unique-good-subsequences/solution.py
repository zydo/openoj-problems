from typing import List, Optional


class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        MOD = 10**9 + 7
        end0 = 0
        end1 = 0
        has_zero = False
        for ch in binary:
            if ch == "0":
                end0 = (end0 + end1) % MOD
                has_zero = True
            else:
                end1 = (end1 + end0 + 1) % MOD
        return (end0 + end1 + (1 if has_zero else 0)) % MOD
