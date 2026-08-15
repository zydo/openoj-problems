from typing import List, Optional
import bisect


class Solution:
    def makeArrayIncreasing(self, arr1: List[int], arr2: List[int]) -> int:
        arr2 = sorted(set(arr2))
        m = len(arr2)
        INF = float("inf")

        dp = {arr1[0]: 0}
        for v in arr2:
            if v < arr1[0]:
                dp[v] = 1

        for i in range(1, len(arr1)):
            ndp = {}
            for last, ops in dp.items():
                if arr1[i] > last:
                    if arr1[i] not in ndp or ndp[arr1[i]] > ops:
                        ndp[arr1[i]] = ops
                idx = bisect.bisect_right(arr2, last)
                if idx < m:
                    v = arr2[idx]
                    if v not in ndp or ndp[v] > ops + 1:
                        ndp[v] = ops + 1
            dp = ndp
            if not dp:
                return -1

        return min(dp.values())
