# Solutions — Shortest Subarray To Target

Two ways to exploit the same fact — every element is positive, so a sum
only grows as its window extends. One walks both ends of a window across
the array in a single linear pass; the other precomputes prefix sums and
binary-searches each start position's shortest qualifying run.

## sliding_window

Positivity gives strict monotonicity: push the right end forward and the
sum rises; pull the left end back and it falls. That is exactly what makes
two pointers sound — for each right end there is a unique leftmost left end
still reaching the target, and as `right` advances that boundary can only
move rightward, so each pointer travels at most `n` steps in total.

The sweep feeds `right` forward, adding each element into `window`; the
moment the sum covers `target`, the length `right - left + 1` is recorded
and the left end retracts, subtracting `nums[left]`, for as long as the sum
stays big enough. That inner retraction does double duty — it pins down the
tightest window ending at this `right`, and it leaves the window as lean as
possible for the next extension — so no candidate slips through.

`best` begins at `n + 1`, a length nothing can achieve; if the entire array
never adds up to `target`, the sentinel survives untouched and 0 comes
back. One element at or above the target lands on length 1 immediately.

**Complexity:** `O(n)` time, `O(1)` space.

## prefix_bisect

Prefix sums recast each run as a difference: `sum(nums[i..j)) = prefix[j] -
prefix[i]`. The shortest run beginning at `i` therefore ends at the first
`j > i` with `prefix[j] >= prefix[i] + target` — a lower-bound query.
Positivity is what makes the table strictly increasing, i.e. sorted, which
is precisely the property the search leans on; with zeros or negatives in
play the table would flatten or disorder and the query could no longer jump
over candidates.

From there the method runs itself: fill `prefix` in one sweep, then for
every `i` bisect the range `[i + 1, n]` for the first entry reaching
`prefix[i] + target`. A hit within bounds makes `j - i` a candidate, and
the smallest of those wins; the `n + 1` sentinel once more stands for
"never reached" and comes back as 0.

The same monotonicity quietly aligns the two variants: what lets the
two-pointer window decline to revisit starts also lets each search halt at
the first qualifying end. What it costs is the extra table and the log
factor — the fee for a formulation that would extend to a merge-sort or
segment tree once elements may be negative.

**Complexity:** `O(n log n)` time, `O(n)` space for the prefix table.
