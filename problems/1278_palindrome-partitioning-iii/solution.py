class Solution:
    def palindromePartition(self, s: str, k: int) -> int:
        n = len(s)
        # cost[i][j] = min changes to make s[i..j] a palindrome
        cost = [[0] * n for _ in range(n)]
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                cost[i][j] = cost[i + 1][j - 1] + (s[i] != s[j])
        # dp[c][i] = min changes to split prefix of length i into c parts
        INF = n // 2 + 1  # any single interval costs at most n // 2
        dp = [[INF] * (n + 1) for _ in range(k + 1)]
        for i in range(1, n + 1):
            dp[1][i] = cost[0][i - 1]
        for c in range(2, k + 1):
            for i in range(c, n + 1):
                best = INF
                for j in range(c - 1, i):
                    cand = dp[c - 1][j] + cost[j][i - 1]
                    if cand < best:
                        best = cand
                dp[c][i] = best
        return dp[k][n]
