# Solutions — Minimum Deletions for a Peak Array

## Keep the Longest Peak Subsequence

Deleting as few entries as possible is the same as keeping as many as
possible, so the real target is the longest subsequence that rises
strictly to a summit and falls strictly after it. Fix the summit `i` and
the shape splits in two: an ascending chain that ends at `i` and a
descending chain that begins there. Writing `up[i]` and `down[i]` for
their best lengths, the peak built on `i` keeps `up[i] + down[i] - 1`
entries — the summit belongs to both chains and is counted once.

Both tables fall out of quadratic dynamic programming. Scanning left to
right, `up[i]` is `1 + max(up[j])` over `j < i` with `nums[j] < nums[i]`;
scanning right to left, `down[i]` is `1 + max(down[j])` over `j > i` with
`nums[j] < nums[i]`. The comparisons stay strict on purpose: equal
neighbours fit on neither slope. For `nums = [4,3,7,8,2,6,1]` this gives
`up = [1,1,2,3,1,2,1]` and `down = [4,3,3,3,2,2,1]`.

Only an interior index can be the summit: `up[i] >= 2` and `down[i] >= 2`
together demand at least one kept entry on each side. Here the summit at
value `8` combines `up = 3` (say `4, 7, 8`) with `down = 3` (say `8, 6, 1`),
keeping five of seven entries, so the answer is `7 - 5 = 2`. Note how
`down[0] = 4` is the longest falling chain of all yet is useless as a
summit — its `up` length is 1. The final answer is `n` minus the best
combined length; with `n <= 1000` the double loops are plenty fast, and
no coordinate compression is needed.

**Complexity:** `O(n²)` time, `O(n)` space.
