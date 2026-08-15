from typing import List, Optional


class Solution:
    def maximumCoins(self, coins: List[List[int]], k: int) -> int:
        import bisect

        segments = sorted(coins, key=lambda s: s[0])
        n = len(segments)
        lefts = [s[0] for s in segments]
        rights = [s[1] for s in segments]
        cs = [s[2] for s in segments]
        area = [cs[i] * (rights[i] - lefts[i] + 1) for i in range(n)]
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + area[i]

        def window(start):
            end = start + k - 1
            a = bisect.bisect_left(rights, start)
            b = bisect.bisect_right(lefts, end) - 1
            if a > b:
                return 0
            lo_a = max(lefts[a], start)
            hi_a = min(rights[a], end)
            if a == b:
                return cs[a] * (hi_a - lo_a + 1) if lo_a <= hi_a else 0
            lo_b = max(lefts[b], start)
            hi_b = min(rights[b], end)
            total = prefix[b + 1] - prefix[a]
            total += cs[a] * (hi_a - lo_a + 1) - area[a]
            total += cs[b] * (hi_b - lo_b + 1) - area[b]
            return total

        best = 0
        for i in range(n):
            for candidate in (lefts[i], rights[i] - k + 1):
                value = window(candidate)
                if value > best:
                    best = value
        return best
