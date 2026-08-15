from typing import List, Optional


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)
        target = n - 1
        paths = []

        def dfs(node, path):
            if node == target:
                paths.append(path[:])
                return
            for nxt in graph[node]:
                path.append(nxt)
                dfs(nxt, path)
                path.pop()

        dfs(0, [0])
        return paths
