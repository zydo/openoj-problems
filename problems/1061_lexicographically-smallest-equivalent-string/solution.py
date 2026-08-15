from typing import List, Optional


class Solution:
    def smallestEquivalentString(self, s1: str, s2: str, baseStr: str) -> str:
        parent = list(range(26))

        def find(a: int) -> int:
            while parent[a] != a:
                parent[a] = parent[parent[a]]
                a = parent[a]
            return a

        for a, b in zip(s1, s2):
            ra, rb = find(ord(a) - 97), find(ord(b) - 97)
            if ra != rb:
                if rb < ra:
                    ra, rb = rb, ra
                parent[rb] = ra

        return "".join(chr(97 + find(ord(c) - 97)) for c in baseStr)
