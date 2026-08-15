from typing import List, Optional


class Solution:
    def countDistinct(self, nums: List[int], k: int, p: int) -> int:
        seen = set()
        n = len(nums)
        for i in range(n):
            divisible = 0
            cur = []
            for j in range(i, n):
                if nums[j] % p == 0:
                    divisible += 1
                cur.append(nums[j])
                if divisible > k:
                    break
                seen.add(tuple(cur))
        return len(seen)
