from typing import List, Optional

from collections import defaultdict


class Solution:
    def findRotateSteps(self, ring: str, key: str) -> int:
        n = len(ring)
        positions = defaultdict(list)
        for i, ch in enumerate(ring):
            positions[ch].append(i)
        # dp: ring index aligned at 12:00 -> min rotation steps so far
        dp = {0: 0}
        for ch in key:
            nxt = {}
            for j in positions[ch]:
                best = min(dp[i] + min(abs(i - j), n - abs(i - j)) for i in dp)
                nxt[j] = best
            dp = nxt
        return min(dp.values()) + len(key)
