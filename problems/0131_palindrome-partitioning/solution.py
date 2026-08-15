from typing import List, Optional


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        n = len(s)
        is_pal = [[False] * n for _ in range(n)]
        for i in range(n - 1, -1, -1):
            for j in range(i, n):
                if s[i] == s[j] and (j - i < 2 or is_pal[i + 1][j - 1]):
                    is_pal[i][j] = True

        result = []
        current = []

        def backtrack(start):
            if start == n:
                result.append(list(current))
                return
            for end in range(start, n):
                if is_pal[start][end]:
                    current.append(s[start : end + 1])
                    backtrack(end + 1)
                    current.pop()

        backtrack(0)
        return result
