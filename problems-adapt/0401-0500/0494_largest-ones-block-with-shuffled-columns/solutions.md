# Solutions — Largest Ones Block With Shuffled Columns

## Consecutive-Ones Heights with Per-Row Sorting

Whole columns may be shuffled, so an all-ones block is pinned down only by
_which_ columns it spans, never by where they happen to stand. Fix the bottom
row of a candidate block: the right move is to gather the columns whose run of
consecutive ones reaching that row is longest and let the shuffle set them
shoulder to shoulder. Each row therefore poses the same histogram question —
among these run heights, how wide a block of height at least `h` can be
assembled — and sorting the row's heights answers every `h` at once.

The running state is `heights[j]`, the length of the unbroken run of ones in
column `j` ending at the current row: bumped by one when `row[j] == 1`, wiped
to 0 otherwise. Each row's heights are sorted largest first; with
`ordered[i]` the `(i+1)`-th largest, a width-`(i + 1)` block with every height
at least `ordered[i]` exists precisely by taking the first `i + 1` entries, so
`ordered[i] * (i + 1)` is a candidate area. The scan of a row stops at the
first zero — descending order makes everything after it zero as well. For
`[[1,1,0],[1,0,1],[1,1,1]]` the bottom row carries heights `3, 2, 1`, and the
`2 × 2` candidate from its second entry is the answer, 4.

Why the multiset is all that matters: any all-ones block resting on this row
uses some column set, and swapping a chosen column for one with a taller run
can only help — a taller run contains every shorter one. Exchanging columns
this way shows the sorted prefix is optimal for its width, so sweeping every
row and width leaves no block unexamined.

**Complexity:** `O(m n log n)` time, `O(n)` space.
