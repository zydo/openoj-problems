from typing import List, Optional


class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        def similar(a: str, b: str) -> bool:
            mismatches = 0
            for x, y in zip(a, b):
                if x != y:
                    mismatches += 1
                    if mismatches > 2:
                        return False
            return mismatches == 0 or mismatches == 2

        n = len(strs)
        parent = list(range(n))

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        for i in range(n):
            for j in range(i + 1, n):
                if similar(strs[i], strs[j]):
                    root_i, root_j = find(i), find(j)
                    if root_i != root_j:
                        parent[root_i] = root_j

        return len({find(i) for i in range(n)})
