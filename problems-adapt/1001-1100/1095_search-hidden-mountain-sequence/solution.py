class Solution:
    def findInMountain(self, reader: MountainReader, target: int) -> int:
        n = reader.length()

        # Peak: the last index still on the rising slope — get(mid - 1) <
        # get(mid) means mid has not passed the peak yet.
        lo, hi = 1, n - 2
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if reader.get(mid - 1) < reader.get(mid):
                lo = mid
            else:
                hi = mid - 1
        peak = lo

        # Ascending slope: smallest index with value >= target.
        lo, hi = 0, peak
        while lo < hi:
            mid = (lo + hi) // 2
            if reader.get(mid) < target:
                lo = mid + 1
            else:
                hi = mid
        if reader.get(lo) == target:
            return lo

        # Descending slope: smallest index with value <= target.
        lo, hi = peak, n - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if reader.get(mid) > target:
                lo = mid + 1
            else:
                hi = mid
        if reader.get(lo) == target:
            return lo
        return -1
