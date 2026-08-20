# Solutions — Median Subarray Distinct Count

## Binary search on the answer with a sliding window

The sorted list of subarray distinct counts has `n(n+1)/2` entries, so it is
never materialized; the search instead walks over the values those entries can
take, 1 through n. The rank sought is the lower middle, `target_rank =
(length + 1) // 2`, and the answer is the smallest candidate `x` for which at
least `target_rank` entries are `<= x`. That cumulative count only grows with
`x`, which is the monotonicity the binary search feeds on.

`count_at_most(x)` tallies subarrays holding at most `x` different values with
a two-pointer window and a frequency map: the right end steps forward one
element at a time, and whenever the map gains more than `x` keys the left end
shrinks until the excess value disappears (its count having dropped to zero).
While the window is legal, every subarray that ends at `right` and starts at or
after `left` qualifies, contributing `right - left + 1`. Both ends only move
forward, so one sweep evaluates the whole count.

The binary search settles on the least `x` whose count reaches the target rank;
because the virtual list is sorted, that `x` is exactly the value parked at the
median position. Subarrays of length 1 anchor the candidate range at 1 and the
whole array caps it at n, so the bounds always enclose the answer. Example 3
makes the picture concrete: with all seven values different the counts are just
the subarray lengths, and rank 14 of 28 falls among the 3s.

**Complexity:** `O(n log n)` time, `O(n)` space.
