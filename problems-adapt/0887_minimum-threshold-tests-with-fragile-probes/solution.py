from typing import List, Optional


class Solution:
    def minimumFragileProbeTests(self, probeCount: int, levelCount: int) -> int:
        # dp[e]: floors resolvable with `moves` moves and e eggs; grow the
        # move count until probeCount eggs cover all levelCount floors.
        dp = [0] * (probeCount + 1)
        moves = 0
        while dp[probeCount] < levelCount:
            moves += 1
            # One drop settles its own floor plus the below-case (e - 1 eggs)
            # and the above-case (e eggs), each with one move fewer. Sweeping
            # e downward keeps dp[e - 1] at the previous move's value — the
            # in-place 0/1 knapsack trick.
            for e in range(probeCount, 0, -1):
                dp[e] = dp[e - 1] + dp[e] + 1
        return moves
