from typing import List, Optional


class Solution:
    def wordSquares(self, words: List[str]) -> List[List[str]]:
        n = len(words[0])
        prefix_map = {}
        for w in words:
            for i in range(n + 1):
                prefix_map.setdefault(w[:i], []).append(w)

        results = []

        def backtrack(square):
            if len(square) == n:
                results.append(list(square))
                return
            col = len(square)
            prefix = "".join(square[r][col] for r in range(col))
            for w in prefix_map.get(prefix, []):
                backtrack(square + [w])

        backtrack([])
        return sorted(results)
