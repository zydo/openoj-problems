from typing import List, Optional


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = [False] * n
        provinces = 0
        for start in range(n):
            if visited[start]:
                continue
            provinces += 1
            visited[start] = True
            stack = [start]
            while stack:
                city = stack.pop()
                for other in range(n):
                    if isConnected[city][other] == 1 and not visited[other]:
                        visited[other] = True
                        stack.append(other)
        return provinces
