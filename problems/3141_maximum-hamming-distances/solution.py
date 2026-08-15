from collections import deque
from typing import List


class Solution:
    def maxHammingDistances(self, nums: List[int], m: int) -> List[int]:
        size = 1 << m
        full = size - 1
        dist = [size + 1] * size
        queue = deque()
        for value in set(nums):
            dist[value] = 0
            queue.append(value)
        while queue:
            v = queue.popleft()
            nd = dist[v] + 1
            for bit in range(m):
                u = v ^ (1 << bit)
                if dist[u] > nd:
                    dist[u] = nd
                    queue.append(u)
        return [m - dist[full ^ x] for x in nums]
