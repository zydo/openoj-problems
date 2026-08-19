from typing import List, Optional


class Solution:
    def longestAdditiveSubseq(self, nums: List[int]) -> int:
        # dp[(j, i)] = length of the longest additive subsequence ending
        # with nums[j], nums[i].
        index_of = {value: i for i, value in enumerate(nums)}
        dp = {}
        best = 0
        for i in range(len(nums)):
            for j in range(i):
                need = nums[i] - nums[j]
                if need < nums[j] and need in index_of:
                    k = index_of[need]
                    dp[(j, i)] = dp.get((k, j), 2) + 1
                    best = max(best, dp[(j, i)])
                else:
                    dp[(j, i)] = 2
        return best if best >= 3 else 0
