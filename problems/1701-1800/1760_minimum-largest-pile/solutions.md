# Solutions — Minimum Largest Pile

## Binary Search on the Answer

Rather than asking which arrangement of splits is best, ask a yes/no question
about a candidate cap `p`: can every pile be broken down to at most `p` stones
within `maxSplits` moves? Any cap above a feasible one is feasible as well —
the same splitting plan already satisfies it — so the predicate is monotone in
`p`, and the smallest cap that passes, which is exactly the answer, is found by
binary search over `[1, max(piles)]`.

Counting the moves a cap demands is arithmetic, not search. A pile of `v`
stones has to finish as at least `ceil(v / p)` pieces, and because every move
adds one pile to the collection, it burns `ceil(v / p) - 1` of the budget —
written as the integer expression `(v - 1) // p`. Near-equal splitting shows
the demand is truly achievable: each piece then holds no more than
`ceil(v / p) <= p` stones. Summing over the piles and comparing the total with
`maxSplits` settles the question.

A converging loop (`lo < hi`, keeping `hi` on each success and moving `lo`
past each failure) lands on the minimal feasible cap. The range is never
empty, since `max(piles)` passes with zero moves, while a cap of 1 is reachable
only when the budget covers one move per stone beyond the first of every pile.

**Complexity:** `O(n log(max(piles)))` time, `O(1)` space.
