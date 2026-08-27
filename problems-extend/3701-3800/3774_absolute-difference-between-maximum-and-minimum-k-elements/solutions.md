# Solutions — Absolute Difference Between Maximum and Minimum K Elements

Sorting orders the whole array, and once sorted the k smallest elements
are exactly the first k entries while the k largest are exactly the last
k. The answer is then a matter of summing the two slices and subtracting.
Duplicates need no special handling: equal values may straddle the cut,
but each side still holds exactly k elements whose multiset is the one the
problem asks about.

## Sort, then sum the two slices

Sort `nums` in nondecreasing order. The sum of the k smallest elements is
`nums[0] + ... + nums[k-1]` and the sum of the k largest is
`nums[n-k] + ... + nums[n-1]`, so the answer is the difference of those
two slice sums. Every element is at most `100` and there are at most
`100` elements, so each sum fits trivially in a 32-bit integer and the
language-native type carries the answer directly.

One sort followed by a constant-time slice sum.

**Complexity:** `O(n log n)` time, `O(1)` extra space (in-place sort).
