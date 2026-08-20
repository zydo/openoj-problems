from typing import List, Optional


class Solution:
    def boundedFinalScoreProbability(self, scoreLimit: int, stopScore: int, drawMaximum: int) -> float:
        if stopScore == 0 or scoreLimit >= stopScore - 1 + drawMaximum:
            return 1.0
        # dp[i] = probability of ever holding exactly i points.
        dp = [0.0] * (scoreLimit + 1)
        dp[0] = 1.0
        window = 1.0  # sum of dp[max(0, i - drawMaximum) .. i - 1]
        for i in range(1, scoreLimit + 1):
            dp[i] = window / drawMaximum
            if i < stopScore:
                window += dp[i]
            if i - drawMaximum >= 0:
                window -= dp[i - drawMaximum]
        # Compensated (Neumaier) summation, matching the reference's built-in sum().
        total = 0.0
        c = 0.0
        for x in dp[stopScore:]:
            t = total + x
            if abs(total) >= abs(x):
                c += (total - t) + x
            else:
                c += (x - t) + total
            total = t
        return total + c
