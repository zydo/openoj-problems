from typing import List, Optional


class Solution:
    def stepsUntilHigher(self, readings: List[int]) -> List[int]:
        n = len(readings)
        answer = [0] * n
        # Stack of positions still waiting for a higher one; their readings
        # are non-increasing bottom to top. Unanswered positions keep answer 0.
        stack: List[int] = []
        for index, reading in enumerate(readings):
            # Strictly higher the current reading resolves each waiting index on top; equal
            # readings leave them waiting (strict < comparison).
            while stack and readings[stack[-1]] < reading:
                previous = stack.pop()
                answer[previous] = index - previous
            stack.append(index)
        return answer
