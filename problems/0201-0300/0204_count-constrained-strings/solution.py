class Solution:
    def countConstrainedStrings(self, n: int) -> int:
        MOD = 10**9 + 7
        # dp[a][l] = strings built so far that spent `a` copies of 'x' (<2)
        # and end with `l` consecutive 'y's (<3)
        dp = [[0] * 3 for _ in range(2)]
        dp[0][0] = 1
        for _ in range(n):
            ndp = [[0] * 3 for _ in range(2)]
            for a in range(2):
                for l in range(3):
                    v = dp[a][l]
                    if not v:
                        continue
                    ndp[a][0] = (ndp[a][0] + v) % MOD  # append 'z'
                    if a + 1 < 2:
                        ndp[a + 1][0] = (ndp[a + 1][0] + v) % MOD  # append 'x'
                    if l + 1 < 3:
                        ndp[a][l + 1] = (ndp[a][l + 1] + v) % MOD  # append 'y'
            dp = ndp
        return sum(sum(row) for row in dp) % MOD
