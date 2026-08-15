from typing import List, Optional
from collections import deque


class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        n = len(colors)
        graph = [[] for _ in range(n)]
        indeg = [0] * n
        for a, b in edges:
            graph[a].append(b)
            indeg[b] += 1

        dp = [[0] * 26 for _ in range(n)]
        color_id = [ord(c) - 97 for c in colors]

        queue = deque(i for i in range(n) if indeg[i] == 0)
        visited = 0
        ans = 0
        while queue:
            u = queue.popleft()
            visited += 1
            dp[u][color_id[u]] += 1
            best = max(dp[u])
            if best > ans:
                ans = best
            du = dp[u]
            for v in graph[u]:
                dv = dp[v]
                for c in range(26):
                    if du[c] > dv[c]:
                        dv[c] = du[c]
                indeg[v] -= 1
                if indeg[v] == 0:
                    queue.append(v)

        if visited != n:
            return -1
        return ans
