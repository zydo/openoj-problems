from typing import List, Optional


class Solution:
    def numSubmat(self, mat: List[List[int]]) -> int:
        m = len(mat)
        n = len(mat[0]) if m else 0
        total = 0
        height = [0] * n
        for r in range(m):
            for c in range(n):
                if mat[r][c] == 1:
                    height[c] += 1
                else:
                    height[c] = 0
            for left in range(n):
                min_h = height[left]
                for right in range(left, n):
                    if height[right] < min_h:
                        min_h = height[right]
                    total += min_h
        return total
