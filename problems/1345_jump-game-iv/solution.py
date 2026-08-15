from typing import List

from collections import defaultdict, deque


class Solution:
    def minJumps(self, arr: List[int]) -> int:
        n = len(arr)
        if n == 1:
            return 0
        indices = defaultdict(list)
        for i, value in enumerate(arr):
            indices[value].append(i)
        dist = [-1] * n
        dist[0] = 0
        queue = deque([0])
        while queue:
            i = queue.popleft()
            d = dist[i] + 1
            nexts = [i - 1, i + 1] + indices[arr[i]]
            indices[arr[i]] = []
            for j in nexts:
                if 0 <= j < n and dist[j] == -1:
                    dist[j] = d
                    if j == n - 1:
                        return d
                    queue.append(j)
        return dist[n - 1]
