from typing import List, Optional


class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n = len(heights)
        answer = [0] * n
        stack = []
        for i in range(n - 1, -1, -1):
            seen = 0
            while stack and stack[-1] < heights[i]:
                stack.pop()
                seen += 1
            answer[i] = seen + (1 if stack else 0)
            stack.append(heights[i])
        return answer
