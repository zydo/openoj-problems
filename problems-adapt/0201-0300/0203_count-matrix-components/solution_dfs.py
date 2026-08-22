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
            stack = [start]
            while stack:
                city = stack.pop()
                for other in range(n):
                    if adjacency[city][other] == 1 and not visited[other]:
                        # Mark at push time so no city is stacked twice;
                        # membership is by visitation, so self-loops and the
                        # symmetric matrix never double count.
                        visited[other] = True
                        stack.append(other)
        return components
