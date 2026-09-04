# Solutions — Fewest Insertions to Embed a Sequence

## Longest Increasing Subsequence Reduction

Insertions are the mirror image of retention: the longest stretch of `target`
that already lives inside `arr` in the correct order is a common subsequence
of the two arrays, and each `target` element outside that stretch costs
exactly one insertion. The answer is therefore `len(target) - LCS(target, arr)`.
A general LCS is quadratic, but `target` repeats no value, and that collapses
the problem: number the positions of `target`, rewrite each element of `arr`
that occurs in `target` as the position of that value, and drop the rest. A
common subsequence of both arrays is now precisely a strictly increasing run
of positions, so the LCS length is the longest strictly increasing subsequence
of the rewritten array.

The rewritten array goes through patience sorting: `tails` keeps the smallest
possible tail of an increasing subsequence of each length, and `bisect_left`
places the next position — appended when it tops every pile, otherwise it
overwrites the first pile tail that is `>=` it. `bisect_left` rather than
`bisect_right` is what enforces strictness, and strictness is load-bearing
when `arr` repeats a value of `target`: both occurrences rewrite to the same
position, and replacing in place is what stops both from being used — with
`arr = [2,2,8]` and `target = [5,2,8]` the two 2s both become position 1, and
only one may enter the kept part.

Values of `arr` that `target` lacks never enter the rewritten array — they can
form no part of the kept stretch, yet cost nothing, since they may simply
remain where they are. The final answer is `len(target) - len(tails)`.

**Complexity:** `O((T + A) log T)` time, `O(T)` space.
