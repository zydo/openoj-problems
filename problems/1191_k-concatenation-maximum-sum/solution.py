from typing import List, Optional


class Solution:
    def kConcatenationMaxSum(self, arr: List[int], k: int) -> int:
        MOD = 10**9 + 7

        def kadane(values):
            best = 0
            current = 0
            for value in values:
                current = max(current + value, 0)
                best = max(best, current)
            return best

        def max_prefix(values):
            best = 0
            current = 0
            for value in values:
                current += value
                best = max(best, current)
            return best

        def max_suffix(values):
            best = 0
            current = 0
            for value in reversed(values):
                current += value
                best = max(best, current)
            return best

        total = sum(arr)
        if k == 1:
            return kadane(arr) % MOD
        best = kadane(arr + arr)
        if k > 2 and total > 0:
            best = max(best, max_suffix(arr) + max_prefix(arr) + (k - 2) * total)
        return best % MOD
