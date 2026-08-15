from typing import List, Optional


class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        ordered = sorted(costs, key=lambda cost: cost[0] - cost[1])
        n = len(ordered) // 2
        return sum(cost[0] for cost in ordered[:n]) + sum(
            cost[1] for cost in ordered[n:]
        )
