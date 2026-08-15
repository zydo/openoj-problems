from typing import List, Optional


class Solution:
    def maxHeight(self, cuboids: List[List[int]]) -> int:
        boxes = sorted(sorted(c) for c in cuboids)
        n = len(boxes)
        dp = [box[2] for box in boxes]
        for i in range(n):
            for j in range(i):
                if (
                    boxes[j][0] <= boxes[i][0]
                    and boxes[j][1] <= boxes[i][1]
                    and boxes[j][2] <= boxes[i][2]
                ):
                    if dp[j] + boxes[i][2] > dp[i]:
                        dp[i] = dp[j] + boxes[i][2]
        return max(dp)
