from typing import List


class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        from bisect import bisect_left, insort

        window = []
        out = []
        for i, x in enumerate(nums):
            insort(window, x)
            if i >= k:
                window.pop(bisect_left(window, nums[i - k]))
            if i >= k - 1:
                if k & 1:
                    out.append(float(window[k // 2]))
                else:
                    out.append((window[k // 2 - 1] + window[k // 2]) / 2.0)
        return out
