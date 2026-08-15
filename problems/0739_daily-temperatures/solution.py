from typing import List, Optional


class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        answer = [0] * n
        stack: List[int] = []
        for day, temp in enumerate(temperatures):
            while stack and temperatures[stack[-1]] < temp:
                previous = stack.pop()
                answer[previous] = day - previous
            stack.append(day)
        return answer
