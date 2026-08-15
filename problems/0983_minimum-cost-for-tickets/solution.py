from typing import List, Optional


class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        durations = [1, 7, 30]
        travel = set(days)
        last = days[-1]
        dp = [0] * (last + 31)
        for day in range(1, last + 1):
            if day not in travel:
                dp[day] = dp[day - 1]
            else:
                dp[day] = min(
                    dp[max(0, day - duration)] + cost
                    for duration, cost in zip(durations, costs)
                )
        return dp[last]
