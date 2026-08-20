from typing import List, Optional


class Solution:
    def fewestSwapsToGatherOnes(self, bits: List[int]) -> int:
        # the grouped block must hold every 1, so its length is fixed at ones
        ones = sum(bits)
        if ones <= 1:
            # zero or a single 1 (or all zeros) is trivially grouped
            return 0
        # zeros in the first window: each zero inside costs exactly one swap
        zeros = bits[:ones].count(0)
        best = zeros
        for i in range(ones, len(bits)):
            # slide by one: entering element adds its zero-ness, leaving
            # element drops its, so the tally stays exact without rescanning
            zeros += (1 - bits[i]) - (1 - bits[i - ones])
            if zeros < best:
                best = zeros
        return best
