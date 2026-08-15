from typing import List, Optional


class Solution:
    def encode(self, s: str) -> str:
        n = len(s)
        dp = [[""] * n for _ in range(n)]
        for length in range(1, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                substr = s[i : j + 1]
                best = substr
                for k in range(i, j):
                    candidate = dp[i][k] + dp[k + 1][j]
                    if len(candidate) < len(best):
                        best = candidate
                compression = None
                for p in range(1, length):
                    if length % p == 0:
                        pattern = s[i : i + p]
                        if pattern * (length // p) == substr:
                            encoded = str(length // p) + "[" + dp[i][i + p - 1] + "]"
                            if compression is None or len(encoded) < len(compression):
                                compression = encoded
                if compression is not None:
                    if len(compression) < len(best) or (
                        len(compression) == len(best) and best != substr
                    ):
                        best = compression
                dp[i][j] = best
        return dp[0][n - 1]
