# Solutions — Three-Way Splits With Nondecreasing Sums

Both solutions read the two balance conditions off one prefix-sum table: with
the first cut after index `i - 1` and the second after `j - 1`, a cut pair is
legal exactly when `2 * prefix[i] <= prefix[j] <= (total + prefix[i]) / 2`.
Non-negative elements keep the table non-decreasing, so each `i` owns one
contiguous stretch of legal `j`. The binary-search variant marks the
stretch's ends with two bisections per cut; the two-pointer sweep notices
that both ends only ever move right as `i` advances, and amortizes them into
a single forward pass.

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

## Monotone Two-Pointer Sweep

The bisections re-derive, for every first cut, boundaries that barely move.
Advance `i` by one and the head sum `prefix[i]` cannot shrink, so the
threshold `2 * prefix[i]` only rises — the first `j` clearing it cannot move
left. The ceiling `(total + prefix[i]) / 2` only rises too, so the first `j`
breaking it cannot move left either. Both cut bounds therefore march
monotonically right with the first cut, and two pointers that only ever
advance can carry them across the whole sweep.

The code keeps `lo` and `hi` as the current stretch's half-open ends. Each
`i` first lifts `lo` to at least `i + 1`, then walks it forward while
`prefix[lo] < 2 * prefix[i]` — the entries it passes are exactly those that
leave the middle block too small. `hi` follows as the right end: it is
lifted to `lo` when it lags (no legal cut is lost, because every position
the lift skips already failed the lower test), then walks forward while
`prefix[hi]` stays at or under the ceiling. The stretch `[lo, hi)` contributes
`hi - lo` cuts, and keeping `lo` above `i` while both walks stop at `n`
leaves all three blocks non-empty.

Neither pointer ever retreats, and each stops at `n` for good, so across all
`n - 2` values of `i` the two walks take at most `n` advances apiece — the
log factor of the bisections dissolves into one linear sweep. Inputs whose
mass sits at the front (like `[4,2,1,1]`) push `lo` all the way to `n` and
leave every stretch empty. The running total is reduced modulo 10^9 + 7 as
it grows.

**Complexity:** `O(n)` time, `O(n)` space.
