from collections import Counter
from typing import List


class Solution:
    def dodgeSwaps(self, nums: List[int], banned: List[int]) -> int:
        # A swap repairs at most two bad positions, and two bad positions
        # sharing a value cannot repair each other, so the answer is at
        # least max(ceil(bad/2), worst same-value cluster). A value whose
        # combined count in nums and banned exceeds n has nowhere to
        # hide and makes the task impossible; otherwise both lower bounds
        # are achievable, and their max is the answer.
        n = len(nums)
        freq = Counter(nums)
        freq.update(banned)
        for count in freq.values():
            if count >= n + 1:
                return -1
        bad = Counter()
        for a, b in zip(nums, banned):
            if a == b:
                bad[a] += 1
        total = sum(bad.values())
        worst = max(bad.values(), default=0)
        return max((total + 1) // 2, worst)
