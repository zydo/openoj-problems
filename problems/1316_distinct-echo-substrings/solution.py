from typing import List, Optional


class Solution:
    def distinctEchoSubstrings(self, text: str) -> int:
        n = len(text)
        seen = set()
        for half in range(1, n // 2 + 1):
            for i in range(n - 2 * half + 1):
                if text[i : i + half] == text[i + half : i + 2 * half]:
                    seen.add(text[i : i + 2 * half])
        return len(seen)
