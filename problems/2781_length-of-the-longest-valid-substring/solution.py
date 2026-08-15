from typing import List, Optional


class Solution:
    def longestValidSubstring(self, word: str, forbidden: List[str]) -> int:
        banned = set(forbidden)
        max_len = max((len(s) for s in banned), default=0)
        n = len(word)
        left = 0
        ans = 0
        for right in range(n):
            start = max(right - max_len, left - 1)
            for j in range(right, start, -1):
                if word[j : right + 1] in banned:
                    left = j + 1
                    break
            ans = max(ans, right - left + 1)
        return ans
