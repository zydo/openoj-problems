class Solution:
    def smallestDivisorUnderCap(self, nums: list[int], cap: int) -> int:
        # (x + d - 1) // d is the float-free ceiling of x / d.
        def total(divisor):
            return sum((x + divisor - 1) // divisor for x in nums)

        # The ceiled sum is non-increasing in the divisor, so "sum <=
        # cap" is monotone: lower-bound search for the smallest valid d.
        lo, hi = 1, max(nums)  # past max(nums) every term is already 1
        while lo < hi:
            mid = (lo + hi) // 2
            if total(mid) <= cap:
                hi = mid
            else:
                lo = mid + 1
        return lo
