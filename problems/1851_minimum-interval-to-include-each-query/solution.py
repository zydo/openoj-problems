from typing import List, Optional

import heapq


class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        intervals = sorted(intervals)
        order = sorted(range(len(queries)), key=lambda j: queries[j])
        heap = []
        answers = [0] * len(queries)
        i = 0
        n = len(intervals)
        for j in order:
            q = queries[j]
            while i < n and intervals[i][0] <= q:
                left, right = intervals[i]
                heapq.heappush(heap, (right - left + 1, right))
                i += 1
            while heap and heap[0][1] < q:
                heapq.heappop(heap)
            answers[j] = heap[0][0] if heap else -1
        return answers
