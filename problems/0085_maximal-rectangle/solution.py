from typing import List, Optional


class Solution:
    def largest_area(self, heights: List[int]) -> int:
        stack = []
        best = 0
        for i, h in enumerate(heights + [0]):
            while stack and heights[stack[-1]] > h:
                height = heights[stack.pop()]
                left = stack[-1] if stack else -1
                best = max(best, height * (i - left - 1))
            stack.append(i)
        return best

    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix or not matrix[0]:
            return 0
        rows, cols = len(matrix), len(matrix[0])
        heights = [0] * cols
        best = 0
        for r in range(rows):
            for c in range(cols):
                heights[c] = heights[c] + 1 if matrix[r][c] == "1" else 0
            best = max(best, self.largest_area(heights))
        return best
