class Solution:
    def fewestChanges(self, nums: list[int], limit: int) -> int:
        n = len(nums)
        # Difference array over candidate target sums t in [2, 2*limit]:
        # each mirror pair's cost curve becomes range updates.
        diff = [0] * (2 * limit + 2)
        for i in range(n // 2):
            j = n - 1 - i
            a, b = nums[i], nums[j]
            lo, hi = min(a, b), max(a, b)
            # Base cost 2 everywhere; −1 across [lo+1, hi+limit], the sums
            # one changed element can reach; a further −1 exactly at
            # t = a + b, where no change is needed.
            diff[2] += 2
            diff[lo + 1] -= 1
            diff[a + b] -= 1
            diff[a + b + 1] += 1
            diff[hi + limit + 1] += 1
        # Prefix sums give the total cost per target; keep the minimum.
        best = float("inf")
        cur = 0
        for target in range(2, 2 * limit + 1):
            cur += diff[target]
            if cur < best:
                best = cur
        return best
