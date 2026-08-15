from typing import List, Optional


class Solution:
    def maximumBooks(self, books: List[int]) -> int:
        n = len(books)
        dp = [0] * n
        stack = []
        for i in range(n):
            bi = books[i]
            while stack and books[stack[-1]] >= bi - (i - stack[-1]):
                stack.pop()
            j = stack[-1] if stack else -1
            if j >= 0:
                length = i - j
            else:
                length = min(i, bi) + 1  # stop where the sequence would go negative
            s = length * bi - length * (length - 1) // 2
            dp[i] = s + (dp[j] if j >= 0 else 0)
            stack.append(i)
        return max(dp) if dp else 0
