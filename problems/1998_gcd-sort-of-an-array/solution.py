from typing import List, Optional


class Solution:
    def gcdSort(self, nums: List[int]) -> bool:
        MX = 100001
        spf = list(range(MX))
        i = 2
        while i * i < MX:
            if spf[i] == i:
                for j in range(i * i, MX, i):
                    if spf[j] == j:
                        spf[j] = i
            i += 1

        parent = list(range(MX))

        def find(a):
            while parent[a] != a:
                parent[a] = parent[parent[a]]
                a = parent[a]
            return a

        def union(a, b):
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb

        for x in nums:
            v = x
            while v > 1:
                p = spf[v]
                union(x, p)
                while v % p == 0:
                    v //= p

        target = sorted(nums)
        for a, b in zip(nums, target):
            if find(a) != find(b):
                return False
        return True
