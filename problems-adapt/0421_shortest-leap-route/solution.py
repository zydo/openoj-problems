from typing import List

from collections import defaultdict, deque


class Solution:
    def shortestLeapRoute(self, nums: List[int]) -> int:
        n = len(nums)
        # Start is already the target.
        if n == 1:
            return 0
        # One pass groups indices by value so a node's same-value neighbors
        # cost their group size instead of rescanning the array.
        indices = defaultdict(list)
        for i, value in enumerate(nums):
            indices[value].append(i)
        # BFS over the implicit graph (edges i-1, i+1, same-value) gives the
        # minimum leap count; -1 doubles as the visited marker.
        dist = [-1] * n
        dist[0] = 0
        queue = deque([0])
        while queue:
            i = queue.popleft()
            d = dist[i] + 1
            nexts = [i - 1, i + 1] + indices[nums[i]]
            # Clear the group after use: every index in it just became
            # visited at the same distance, so it can never again produce an
            # unvisited neighbor — without this, all-equal arrays go quadratic.
            indices[nums[i]] = []
            for j in nexts:
                # Bounds check filters i-1 < 0 and i+1 >= n.
                if 0 <= j < n and dist[j] == -1:
                    dist[j] = d
                    # The search ends the moment the last index is labeled.
                    if j == n - 1:
                        return d
                    queue.append(j)
        return dist[n - 1]
