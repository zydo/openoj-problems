from typing import List, Optional


class Solution:
    def countPalindromePaths(self, parent: List[int], s: str) -> int:
        n = len(parent)
        children = [[] for _ in range(n)]
        for i in range(1, n):
            children[parent[i]].append(i)

        masks = [0] * n
        order = [0]
        qi = 0
        while qi < len(order):
            v = order[qi]
            qi += 1
            for c in children[v]:
                masks[c] = masks[v] ^ (1 << (ord(s[c]) - ord("a")))
                order.append(c)

        freq = {}
        ans = 0
        for m in masks:
            ans += freq.get(m, 0)
            for b in range(26):
                ans += freq.get(m ^ (1 << b), 0)
            freq[m] = freq.get(m, 0) + 1
        return ans
