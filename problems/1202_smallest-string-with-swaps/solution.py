from typing import List, Optional


class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: List[List[int]]) -> str:
        n = len(s)
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        for a, b in pairs:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb

        groups = {}
        for i in range(n):
            groups.setdefault(find(i), []).append(i)

        result = list(s)
        for indices in groups.values():
            chars = sorted(result[i] for i in indices)
            for i, ch in zip(sorted(indices), chars):
                result[i] = ch
        return "".join(result)
