from collections import deque


class Solution:
    def countComponents(self, adjacency: list[list[int]]) -> int:
        n = len(adjacency)
        visited = [False] * n
        components = 0
        for start in range(n):
            if visited[start]:
                continue
            # An unvisited city during the sweep starts a new component;
            # this one traversal absorbs exactly one component.
            components += 1
            visited[start] = True
            queue = deque([start])
            # The FIFO queue spreads through the component in waves, expanding
            # every city at hop distance d before any at d + 1, yet only
            # visitation, not the order, decides the count.
            while queue:
                city = queue.popleft()
                for other in range(n):
                    if adjacency[city][other] == 1 and not visited[other]:
                        # Mark at enqueue time so no city enters the queue twice;
                        # each city is dequeued once and its adjacency row scanned
                        # once.
                        visited[other] = True
                        queue.append(other)
        return components
