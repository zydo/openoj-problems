from typing import List, Optional
from bisect import bisect_right


class Solution:
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        tails = []
        ans = []
        for x in obstacles:
            i = bisect_right(tails, x)
            if i == len(tails):
                tails.append(x)
            else:
                tails[i] = x
            ans.append(i + 1)
        return ans
