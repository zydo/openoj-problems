from typing import List, Optional
import heapq


class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        ordered = sorted(meetings, key=lambda m: m[0])
        free = list(range(n))
        heapq.heapify(free)
        busy = []  # (end_time, room)
        count = [0] * n
        for s, e in ordered:
            while busy and busy[0][0] <= s:
                _, room = heapq.heappop(busy)
                heapq.heappush(free, room)
            if free:
                room = heapq.heappop(free)
                heapq.heappush(busy, (e, room))
            else:
                end, room = heapq.heappop(busy)
                heapq.heappush(busy, (end + (e - s), room))
            count[room] += 1
        best = 0
        for i in range(1, n):
            if count[i] > count[best]:
                best = i
        return best
