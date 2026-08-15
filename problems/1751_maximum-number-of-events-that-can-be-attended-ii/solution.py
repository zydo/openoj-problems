from bisect import bisect_left
from typing import List


class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        events.sort(key=lambda e: e[1])
        n = len(events)
        starts = [e[0] for e in events]
        ends = [e[1] for e in events]
        values = [e[2] for e in events]
        # prev[i]: best value using the first i sorted events with one fewer
        # allowed attendance.
        prev = [0] * (n + 1)
        for _ in range(min(k, n)):
            cur = [0] * (n + 1)
            best = 0
            for i in range(n):
                take = prev[bisect_left(ends, starts[i])] + values[i]
                if take > best:
                    best = take
                cur[i + 1] = best
            prev = cur
        return prev[n]
