from typing import List, Optional


class Solution:
    def maximumSegmentSum(self, nums: List[int], removeQueries: List[int]) -> List[int]:
        n = len(nums)
        parent = list(range(n))
        ssum = [0] * n
        active = [False] * n

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        answer = [0]
        best = 0
        for q in reversed(removeQueries[1:]):
            i = q
            active[i] = True
            ssum[i] = nums[i]
            for j in (i - 1, i + 1):
                if 0 <= j < n and active[j]:
                    a, b = find(i), find(j)
                    if a != b:
                        parent[a] = b
                        ssum[b] += ssum[a]
            best = max(best, ssum[find(i)])
            answer.append(best)
        answer.reverse()
        return answer
