from typing import List, Optional


class Solution:
    def sortArray(self, nums: List[int]) -> int:
        def ops_for(target):
            n = len(nums)
            sigma = [target[v] for v in nums]
            blank = nums.index(0)
            visited = [False] * n
            total = 0
            for i in range(n):
                if visited[i]:
                    continue
                length = 0
                has_blank = False
                j = i
                while not visited[j]:
                    visited[j] = True
                    if j == blank:
                        has_blank = True
                    length += 1
                    j = sigma[j]
                if has_blank:
                    total += length - 1
                elif length >= 2:
                    total += length + 1
            return total

        n = len(nums)
        target_a = [n - 1] + list(range(n - 1))
        target_b = list(range(n))
        return min(ops_for(target_a), ops_for(target_b))
