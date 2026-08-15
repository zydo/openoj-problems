from typing import List, Optional


class Solution:
    def countTriplets(self, arr: List[int]) -> int:
        count = {0: 1}
        index_sum = {0: 0}
        prefix = 0
        answer = 0
        for j, value in enumerate(arr):
            prefix ^= value
            if prefix in count:
                answer += j * count[prefix] - index_sum[prefix]
            count[prefix] = count.get(prefix, 0) + 1
            index_sum[prefix] = index_sum.get(prefix, 0) + (j + 1)
        return answer
