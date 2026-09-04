from collections import deque


class Solution:
    def coursePrerequisiteQueries(
        self, courseCount: int, prerequisites: list[list[int]], queries: list[list[int]]
    ) -> list[bool]:
        adjacency = [[] for _ in range(courseCount)]
        indegree = [0] * courseCount
        for a, b in prerequisites:
            adjacency[a].append(b)
            indegree[b] += 1
        reach = [0] * courseCount  # bitset of courses that reach this course
        queue = deque(i for i in range(courseCount) if indegree[i] == 0)
        while queue:
            u = queue.popleft()
            bits = reach[u] | (1 << u)
            for v in adjacency[u]:
                reach[v] |= bits
                indegree[v] -= 1
                if indegree[v] == 0:
                    queue.append(v)
        return [bool((reach[v] >> u) & 1) for u, v in queries]
