from typing import List, Optional


class Solution:
    def maxDisjointTotal(self, n: int, segments: List[List[int]]) -> int:
        # Non-overlapping segments make this weighted interval scheduling on a
        # line. Bucket segments by end position — the bucket array itself provides
        # ordering by end position, so no sorting is needed.
        by_end = [[] for _ in range(n)]
        for start, end, gold in segments:
            by_end[end].append((start, gold))
        # dp[e + 1]: best value from positions 0..e. Either position e stays unclaimed
        # (carry dp[e] forward) or some segment [start, e, value] is claimed on top
        # of the optimum strictly before its start — reading dp[start] is
        # what keeps overlapping segments from being combined.
        dp = [0] * (n + 1)
        for end in range(n):
            dp[end + 1] = dp[end]
            for start, gold in by_end[end]:
                cand = dp[start] + gold
                if cand > dp[end + 1]:
                    dp[end + 1] = cand
        return dp[n]
