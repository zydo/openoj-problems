from typing import List, Optional


class Solution:
    def minSwaps(self, data: List[int]) -> int:
        ones = sum(data)
        if ones <= 1:
            return 0
        zeros = data[:ones].count(0)
        best = zeros
        for i in range(ones, len(data)):
            zeros += (1 - data[i]) - (1 - data[i - ones])
            if zeros < best:
                best = zeros
        return best
