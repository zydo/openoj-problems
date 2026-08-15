from typing import List, Optional


class Solution:
    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        n = len(nums)
        if n == 1:
            return True
        if 1 in nums:
            return False

        maxv = max(nums)
        spf = list(range(maxv + 1))
        i = 2
        while i * i <= maxv:
            if spf[i] == i:
                for j in range(i * i, maxv + 1, i):
                    if spf[j] == j:
                        spf[j] = i
            i += 1

        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(a, b):
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb

        last = {}
        for i, x in enumerate(nums):
            primes = set()
            v = x
            while v > 1:
                p = spf[v]
                primes.add(p)
                while v % p == 0:
                    v //= p
            for p in primes:
                if p in last:
                    union(i, last[p])
                last[p] = i

        root = find(0)
        return all(find(i) == root for i in range(1, n))
