from typing import List, Optional


class Solution:
    def getCollisionTimes(self, cars: List[List[int]]) -> List[float]:
        n = len(cars)
        answer = [-1.0] * n
        stack = []
        for i in range(n - 1, -1, -1):
            position, speed = cars[i]
            while stack and speed <= cars[stack[-1]][1]:
                stack.pop()
            while stack:
                j = stack[-1]
                t = (cars[j][0] - position) / (speed - cars[j][1])
                if answer[j] > 0 and t >= answer[j]:
                    stack.pop()
                else:
                    answer[i] = t
                    break
            stack.append(i)
        return answer
