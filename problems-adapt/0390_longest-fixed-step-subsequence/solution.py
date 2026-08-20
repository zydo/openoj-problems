from typing import List, Optional


class Solution:
    def longestStepSubsequence(self, arr: List[int], step: int) -> int:
        # A fixed step means each step must land on v + step, so
        # the DP collapses from positions to a map keyed by ending value.
        dp = {}
        best = 0
        for x in arr:
            # Best chain ending at x is one longer than the best ending at
            # x - step (0 if no predecessor has appeared yet). The
            # lookup precedes the write, so only strictly-left elements are
            # used and the chain never runs backwards.
            dp[x] = dp.get(x - step, 0) + 1
            # Overwriting dp[x] is safe: a later chain through the same value
            # is always at least as long as an earlier one.
            if dp[x] > best:
                best = dp[x]
        return best
