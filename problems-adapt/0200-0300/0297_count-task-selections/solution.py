class Solution:
    def countTaskSelections(self, n: int, minPayoff: int, crew: list[int], payoff: list[int]) -> int:
        # dp[workers][p] = number of subsets using at most `workers` workers and
        # at least p payoff; p is capped at minPayoff.
        MOD = 10**9 + 7
        dp = [[0] * (minPayoff + 1) for _ in range(n + 1)]
        for workers in range(n + 1):
            dp[workers][0] = 1
        for g, p in zip(crew, payoff):
            for workers in range(n, g - 1, -1):
                for cap in range(minPayoff, -1, -1):
                    dp[workers][cap] = (dp[workers][cap] + dp[workers - g][max(0, cap - p)]) % MOD
        return dp[n][minPayoff]
