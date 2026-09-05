from collections import deque


class Solution:
    def fewestCourseRounds(self, n: int, precedence: list[list[int]]) -> int:
        adjacency = [[] for _ in range(n + 1)]
        indegree = [0] * (n + 1)
        for prev, nxt in precedence:
            adjacency[prev].append(nxt)
            indegree[nxt] += 1
        # round 1: every course with no prerequisites
        queue = deque(i for i in range(1, n + 1) if indegree[i] == 0)
        rounds = 0
        taken = 0
        while queue:
            rounds += 1
            # drain the entire current level as one round; the answer is
            # the longest prerequisite chain, one level per round
            for _ in range(len(queue)):
                course = queue.popleft()
                taken += 1
                for nxt in adjacency[course]:
                    indegree[nxt] -= 1
                    # prerequisite count hits zero: ready for next round
                    if indegree[nxt] == 0:
                        queue.append(nxt)
        # fewer than n taken means a cycle kept some courses at indegree > 0
        return rounds if taken == n else -1
