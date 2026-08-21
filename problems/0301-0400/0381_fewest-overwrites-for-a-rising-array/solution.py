import bisect


class Solution:
    def fewestOverwrites(self, values: list[int], pool: list[int]) -> int:
        # sorted, distinct replacement candidates so binary search applies
        pool = sorted(set(pool))
        m = len(pool)
        INF = float("inf")

        # dp: strictly increasing prefix whose last value is v -> min ops.
        # keeping values[0] costs 0; any smaller replacement costs 1 (larger
        # replacements are dominated by keeping)
        dp = {values[0]: 0}
        for v in pool:
            if v < values[0]:
                dp[v] = 1

        for i in range(1, len(values)):
            ndp = {}
            for last, ops in dp.items():
                # keep values[i] when it strictly exceeds last: no cost
                if values[i] > last:
                    if values[i] not in ndp or ndp[values[i]] > ops:
                        ndp[values[i]] = ops
                # replace with the smallest pool value > last: the smallest
                # choice leaves the most room for what follows; costs 1 op
                idx = bisect.bisect_right(pool, last)
                if idx < m:
                    v = pool[idx]
                    if v not in ndp or ndp[v] > ops + 1:
                        ndp[v] = ops + 1
            dp = ndp
            # no state survives: a strictly increasing arrangement is impossible
            if not dp:
                return -1

        return min(dp.values())
