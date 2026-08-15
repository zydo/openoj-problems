from typing import List, Optional


class Solution:
    def reorganizeString(self, s: str) -> str:
        n = len(s)
        counts = {}
        for c in s:
            counts[c] = counts.get(c, 0) + 1
        letters = sorted(counts.items(), key=lambda kv: (-kv[1], kv[0]))
        if letters[0][1] > (n + 1) // 2:
            return ""
        res = [""] * n
        idx = 0
        for ch, cnt in letters:
            for _ in range(cnt):
                if idx >= n:
                    idx = 1
                res[idx] = ch
                idx += 2
        return "".join(res)
