class Solution:
    def leastTotalTravel(self, units: list[int], stations: list[list[int]]) -> int:
        # Optimal plans are non-crossing (triangle inequality), so after
        # sorting, each station serves a contiguous block of units in order.
        units = sorted(units)
        stations = sorted(stations, key=lambda x: (x[0], x[1]))
        n = len(units)
        INF = float("inf")
        # dp[i] = min distance to serve the first i units with the
        # stations processed so far; only i = 0 is reachable initially.
        dp = [INF] * (n + 1)
        dp[0] = 0
        for pos, limit in stations:
            # pref[i] = sum of |units[j] - pos| for j < i: prefix differences
            # give any contiguous block's distance to this station.
            pref = [0]
            for r in units:
                pref.append(pref[-1] + abs(r - pos))
            ndp = dp[:]
            for i in range(1, n + 1):
                # dp[i] carried over = skip this station (zero assignments).
                best = dp[i]
                # This station absorbs the trailing t units i-t..i-1.
                for t in range(1, min(limit, i) + 1):
                    if dp[i - t] == INF:
                        continue
                    val = dp[i - t] + pref[i] - pref[i - t]
                    if val < best:
                        best = val
                ndp[i] = best
            dp = ndp
        return dp[n]
