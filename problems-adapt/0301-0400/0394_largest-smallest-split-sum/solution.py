class Solution:
    def largestSmallestSplit(self, nums: list[int], k: int) -> int:
        def pieces_at_least(target):
            # Greedy check: cut as soon as the running sum reaches the target.
            # Cutting earlier never hurts — a delay only feeds an already-satisfied
            # piece and leaves less material for the remaining ones.
            count = 0
            current = 0
            for value in nums:
                current += value
                if current >= target:
                    count += 1
                    current = 0
            return count

        # Binary search on the answer t: "can we get k+1 pieces each of
        # nums >= t?" is monotone in t. The average piece caps the range
        # above; every chunk is positive so t = 1 is always feasible.
        lo, hi = 1, sum(nums) // (k + 1)
        best = 0
        while lo <= hi:
            mid = (lo + hi) // 2
            if pieces_at_least(mid) >= k + 1:
                # At least k+1 pieces: merging surplus neighbours only raises
                # their sums, so t is feasible — record it and aim higher.
                best = mid
                lo = mid + 1
            else:
                hi = mid - 1
        return best
