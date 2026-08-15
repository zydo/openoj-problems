from typing import List


class Solution:
    def lengthOfLIS(self, nums: List[int], k: int) -> int:
        size = 1
        while size <= 100000:
            size *= 2
        tree = [0] * (2 * size)

        def update(index: int, value: int) -> None:
            i = index + size
            while i and tree[i] < value:
                tree[i] = value
                i //= 2

        def query(left: int, right: int) -> int:  # inclusive range max
            best = 0
            lo, hi = left + size, right + size + 1
            while lo < hi:
                if lo & 1:
                    best = max(best, tree[lo])
                    lo += 1
                if hi & 1:
                    hi -= 1
                    best = max(best, tree[hi])
                lo //= 2
                hi //= 2
            return best

        answer = 0
        for x in nums:
            current = query(max(1, x - k), x - 1) + 1
            update(x, current)
            answer = max(answer, current)
        return answer
