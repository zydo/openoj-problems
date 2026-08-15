from typing import List, Optional


class Solution:
    def palindromePairs(self, words: List[str]) -> List[List[int]]:
        index = {w: i for i, w in enumerate(words)}
        results = set()

        def is_palindrome(s: str) -> bool:
            return s == s[::-1]

        for j, w in enumerate(words):
            length = len(w)
            for cut in range(length + 1):
                prefix = w[:cut]
                suffix = w[cut:]
                if is_palindrome(prefix):
                    rev = suffix[::-1]
                    if rev in index and index[rev] != j:
                        results.add((index[rev], j))
                if cut != length and is_palindrome(suffix):
                    rev = prefix[::-1]
                    if rev in index and index[rev] != j:
                        results.add((j, index[rev]))
        return sorted([list(pair) for pair in results])
