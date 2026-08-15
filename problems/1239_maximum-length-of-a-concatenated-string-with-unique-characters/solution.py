from typing import List, Optional


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        masks = []
        for s in arr:
            mask = 0
            for ch in s:
                bit = 1 << (ord(ch) - ord("a"))
                if mask & bit:
                    mask = -1
                    break
                mask |= bit
            masks.append(mask)

        n = len(arr)
        best = 0

        def dfs(index, used):
            nonlocal best
            total = bin(used).count("1")
            if total > best:
                best = total
            for j in range(index, n):
                if masks[j] != -1 and not (used & masks[j]):
                    dfs(j + 1, used | masks[j])

        dfs(0, 0)
        return best
