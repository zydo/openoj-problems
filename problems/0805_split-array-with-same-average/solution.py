from typing import List, Optional


class Solution:
    def splitArraySameAverage(self, nums: List[int]) -> bool:
        n = len(nums)
        total = sum(nums)

        def subset_sums(arr):
            d = {}
            m = len(arr)
            for mask in range(1 << m):
                s = 0
                sz = 0
                for i in range(m):
                    if mask >> i & 1:
                        s += arr[i]
                        sz += 1
                d.setdefault(sz, set()).add(s)
            return d

        mid = n // 2
        left = subset_sums(nums[:mid])
        right = subset_sums(nums[mid:])
        nr = n - mid

        for s in range(1, n):
            if (total * s) % n != 0:
                continue
            target = total * s // n
            lo = max(0, s - nr)
            hi = min(mid, s)
            for s1 in range(lo, hi + 1):
                s2 = s - s1
                if s1 not in left or s2 not in right:
                    continue
                for v in left[s1]:
                    if (target - v) in right[s2]:
                        return True
        return False
