# Solutions — Ways to Split Array Into Three Subarrays

## Prefix Sums with Binary Search

Fix the first cut after index `i - 1`, so the left block sums to `prefix[i]`, and let the second cut fall after index `j - 1` with `i < j < n`. The two ordering conditions translate cleanly onto the prefix array: `left <= mid` becomes `prefix[j] >= 2 * prefix[i]`, and `mid <= right` becomes `2 * prefix[j] <= total + prefix[i]`, i.e. `prefix[j] <= (total + prefix[i]) / 2`. Since all elements are non-negative, `prefix` is non-decreasing, so for each fixed `i` the valid `j` form one contiguous range that two binary searches can delimit.

For each `i` from 1 to `n - 2`, `lo = bisect_left(prefix, 2 * left, i + 1, n)` finds the first prefix value that is at least twice the left sum; if none exists within the open range there is no valid split. `hi = bisect_right(prefix, (total + left) // 2, lo, n)` finds one past the last prefix value satisfying the upper bound. The integer floor is safe because `2 * prefix[j] <= total + left` over the integers is exactly `prefix[j] <= floor((total + left) / 2)`. Each split is counted once by `hi - lo`, and the running total is reduced modulo 10^9 + 7 as it accumulates.

Counting `j` strictly between `i` and `n` keeps all three blocks non-empty: the search window `(i + 1, n)` excludes the prefix entries equal to `prefix[i]` and `prefix[n]`. Arrays whose prefix sums grow too fast (like `[3, 2, 1]`) produce empty ranges and contribute nothing.

**Complexity:** `O(n log n)` time, `O(n)` space.
