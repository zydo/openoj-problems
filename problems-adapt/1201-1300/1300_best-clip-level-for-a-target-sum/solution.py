class Solution:
    def bestClipLevel(self, nums: list[int], target: int) -> int:
        def mutated_sum(value):
            return sum(x if x < value else value for x in nums)

        # Smallest value v such that mutated_sum(v) >= target.
        lo, hi = 0, max(nums)
        while lo < hi:
            mid = (lo + hi) // 2
            if mutated_sum(mid) >= target:
                hi = mid
            else:
                lo = mid + 1
        # Candidates are lo and lo - 1; on a tie the minimum wins.
        if abs(mutated_sum(lo - 1) - target) <= abs(mutated_sum(lo) - target):
            return lo - 1
        return lo
