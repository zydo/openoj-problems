from typing import List, Optional
import heapq


class Solution:
    def eatenApples(self, apples: List[int], days: List[int]) -> int:
        n = len(apples)
        heap = []
        eaten = 0
        for i in range(n):
            if apples[i] > 0:
                heapq.heappush(heap, (i + days[i], apples[i]))
            while heap and heap[0][0] <= i:
                heapq.heappop(heap)
            if heap:
                rot_day, count = heapq.heappop(heap)
                eaten += 1
                if count > 1:
                    heapq.heappush(heap, (rot_day, count - 1))
        day = n
        while heap:
            while heap and heap[0][0] <= day:
                heapq.heappop(heap)
            if not heap:
                break
            rot_day, count = heapq.heappop(heap)
            eaten += 1
            if count > 1:
                heapq.heappush(heap, (rot_day, count - 1))
            day += 1
        return eaten
