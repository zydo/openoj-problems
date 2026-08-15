from typing import List


class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        total = sum(stones)
        target = total // 2
        reachable = [False] * (target + 1)
        reachable[0] = True
        for value in stones:
            for s in range(target, value - 1, -1):
                if reachable[s - value]:
                    reachable[s] = True
        best = next(s for s in range(target, -1, -1) if reachable[s])
        return total - 2 * best
