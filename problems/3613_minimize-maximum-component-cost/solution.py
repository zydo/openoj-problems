from typing import List, Optional


class Solution:
    def minCost(self, n: int, edges: List[List[int]], k: int) -> int:
        if k >= n:
            return 0

        def feasible(t):
            parent = list(range(n))

            def find(x):
                while parent[x] != x:
                    parent[x] = parent[parent[x]]
                    x = parent[x]
                return x

            comps = n
            for u, v, w in edges:
                if w <= t:
                    ru = find(u)
                    rv = find(v)
                    if ru != rv:
                        parent[ru] = rv
                        comps -= 1
            return comps <= k

        if feasible(0):
            return 0
        weights = sorted({w for _, _, w in edges})
        lo, hi = 0, len(weights) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if feasible(weights[mid]):
                hi = mid
            else:
                lo = mid + 1
        return weights[lo]
