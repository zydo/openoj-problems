from typing import List, Optional
import heapq


class Solution:
    def maxEvents(self, events: List[List[int]]) -> int:
        events = sorted(events)
        n = len(events)
        i = 0
        day = 1
        open_ends = []
        attended = 0
        while i < n or open_ends:
            if not open_ends:
                day = max(day, events[i][0])
            while i < n and events[i][0] <= day:
                heapq.heappush(open_ends, events[i][1])
                i += 1
            while open_ends and open_ends[0] < day:
                heapq.heappop(open_ends)
            if open_ends:
                heapq.heappop(open_ends)
                attended += 1
            day += 1
        return attended
