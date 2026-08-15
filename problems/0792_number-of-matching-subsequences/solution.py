from typing import List, Optional


class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        waiting = {}
        count = 0
        for w in words:
            if not w:
                count += 1
            else:
                waiting.setdefault(w[0], []).append((w, 1))
        for c in s:
            its = waiting.pop(c, None)
            if not its:
                continue
            for w, i in its:
                if i == len(w):
                    count += 1
                else:
                    waiting.setdefault(w[i], []).append((w, i + 1))
        return count
