from typing import List, Optional


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        from collections import deque

        adjacency = [[] for _ in range(numCourses)]
        indegree = [0] * numCourses
        for course, prereq in prerequisites:
            adjacency[prereq].append(course)
            indegree[course] += 1
        queue = deque(i for i in range(numCourses) if indegree[i] == 0)
        taken = 0
        while queue:
            node = queue.popleft()
            taken += 1
            for nxt in adjacency[node]:
                indegree[nxt] -= 1
                if indegree[nxt] == 0:
                    queue.append(nxt)
        return taken == numCourses
