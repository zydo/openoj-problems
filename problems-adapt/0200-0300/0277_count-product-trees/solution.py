class Solution:
    def countProductTrees(self, values: list[int]) -> int:
        MOD = 10**9 + 7
        values = sorted(values)
        index = {v: i for i, v in enumerate(values)}
        dp = [1] * len(values)  # dp[i] = trees rooted at values[i]
        for i in range(len(values)):
            v = values[i]
            total = 1
            for j in range(i):
                if v % values[j] == 0:
                    other = v // values[j]
                    if other in index:
                        total += dp[j] * dp[index[other]]
            dp[i] = total % MOD
        return sum(dp) % MOD
