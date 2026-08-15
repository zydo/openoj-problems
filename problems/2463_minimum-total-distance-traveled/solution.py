from typing import List, Optional


class Solution:
    def minimumTotalDistance(self, robot: List[int], factory: List[List[int]]) -> int:
        robot = sorted(robot)
        factory = sorted(factory, key=lambda x: (x[0], x[1]))
        n = len(robot)
        INF = float("inf")
        dp = [INF] * (n + 1)
        dp[0] = 0
        for pos, limit in factory:
            pref = [0]
            for r in robot:
                pref.append(pref[-1] + abs(r - pos))
            ndp = dp[:]
            for i in range(1, n + 1):
                best = dp[i]
                for t in range(1, min(limit, i) + 1):
                    if dp[i - t] == INF:
                        continue
                    val = dp[i - t] + pref[i] - pref[i - t]
                    if val < best:
                        best = val
                ndp[i] = best
            dp = ndp
        return dp[n]
