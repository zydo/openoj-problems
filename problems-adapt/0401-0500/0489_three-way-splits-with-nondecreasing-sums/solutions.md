# Solutions — Three-Way Splits With Nondecreasing Sums

## Prefix Sums with Binary Search

Put the first cut after index `i - 1`, so `head` sums to `prefix[i]`, and the
second cut after index `j - 1` with `i < j < n`. The two balance conditions
land directly on the prefix table: `head <= body` is `prefix[j] >= 2 * prefix[i]`,
and `body <= tail` is `2 * prefix[j] <= total + prefix[i]`, that is,
`prefix[j] <= (total + prefix[i]) / 2`. Non-negative elements make `prefix`
non-decreasing, so for a fixed `i` every legal `j` sits in one contiguous
stretch that two binary searches can bound.

Loop `i` from 1 to `n - 2`. The lower bound
`lo = bisect_left(prefix, 2 * head, i + 1, n)` gives the first prefix value at
least twice the head sum; when it falls outside the open window no cut with
this `i` qualifies. The upper bound
`hi = bisect_right(prefix, (total + head) // 2, lo, n)` gives one past the last
prefix value obeying the upper condition. The integer floor is exact:
`2 * prefix[j] <= total + head` over the integers is precisely
`prefix[j] <= floor((total + head) / 2)`. Each legal `j` is counted once by
`hi - lo`, and the running total is reduced modulo 10^9 + 7 as it grows.

Keeping `j` strictly between `i` and `n` leaves all three blocks non-empty:
the search window `(i + 1, n)` skips the table entries equal to `prefix[i]`
and `prefix[n]`. Inputs whose mass sits at the front (like `[4,2,1,1]`) empty
out every range and contribute nothing.

**Complexity:** `O(n log n)` time, `O(n)` space.
