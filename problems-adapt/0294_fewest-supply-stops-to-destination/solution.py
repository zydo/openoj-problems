import heapq
from typing import List, Optional


class Solution:
    def minimumSupplyStops(self, destination: int, initialRange: int, supplies: List[List[int]]) -> int:
        # Greedy: drive as far as possible; when short of the destination,
        # retroactively refuel with the largest fuel among supplies passed.
        fuel = initialRange
        available = []  # max-heap (negated) of fuels at supplies already passed
        stops = 0
        i = 0
        n = len(supplies)
        while True:
            if fuel >= destination:
                return stops
            farthest = fuel
            while i < n and supplies[i][0] <= farthest:
                heapq.heappush(available, -supplies[i][1])
                i += 1
            if not available:
                return -1
            fuel += -heapq.heappop(available)
            stops += 1
