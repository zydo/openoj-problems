class Solution:
    def minFlips(self, n: int, roads: list[list[int]]) -> int:
        adj = [[] for _ in range(n)]
        for a, b in roads:
            adj[a].append((b, 1))  # original direction a -> b
            adj[b].append((a, 0))
        changed = 0
        visited = [False] * n
        stack = [0]
        visited[0] = True
        while stack:
            node = stack.pop()
            for nxt, direction in adj[node]:
                if visited[nxt]:
                    continue
                if direction == 1:
                    changed += 1
                visited[nxt] = True
                stack.append(nxt)
        return changed
