class Solution:
    def countBoundedSequences(self, n: int, k: int, target: int) -> int:
        MOD = 10**9 + 7
        # dp[t]: ways for the terms chosen so far to reach sum t
        dp = [0] * (target + 1)
        # zero terms reach sum 0 in exactly one way
        dp[0] = 1
        for _ in range(n):
            # fresh table per term: the transition must read only the
            # previous term's distribution, else one term could count twice
            ndp = [0] * (target + 1)
            for t in range(1, target + 1):
                s = 0
                # every term value f is a distinct outcome, so all values are
                # summed; min(k, t) skips values that overshoot the target
                for f in range(1, min(k, t) + 1):
                    s += dp[t - f]
                ndp[t] = s % MOD
            dp = ndp
        # targets no sequence reaches were never written, so read as 0
        return dp[target]
