from typing import List, Optional

import heapq


class Solution:
    def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
        events = []
        for left, right, height in buildings:
            events.append((left, 0, -height, right))  # start
            events.append((right, 1, height, right))  # end
        events.sort()

        result = []
        heap = [(0, float("inf"))]  # (-height, right); top is tallest active
        previous_height = 0
        for x, kind, height, right in events:
            while heap and heap[0][1] <= x:
                heapq.heappop(heap)
            if kind == 0:
                heapq.heappush(heap, (height, right))
            current_height = -heap[0][0]
            if current_height != previous_height:
                result.append([x, current_height])
                previous_height = current_height
        return result
