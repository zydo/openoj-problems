# Solutions — Longest Pair Chain

## Greedy by Right Endpoint

Accepting a pair spends everything up to its right endpoint and leaves the
rest of the number line open, so the pair that ends soonest is never a worse
commitment than one that ends later. That single observation turns the whole
search into one sorted sweep.

Sort the input by right endpoint and scan it, carrying `current_end`, the
right endpoint of the most recently accepted pair, starting at negative
infinity. Accept a pair exactly when its left endpoint lies strictly beyond
`current_end`, and on acceptance let `current_end` advance to that pair's
right endpoint. The strict test is the strict `b < c` rule: two pairs that
share an endpoint, like `[-5,-2]` and `[-2,1]`, can never both appear.

Working the third example: sorted by right endpoint the set reads
`[2,3], [4,5], [10,20], [1,30], [31,40]`. The sweep accepts `[2,3]`
(`current_end` 3), then `[4,5]` (4 > 3, `current_end` 5), then `[10,20]`
(10 > 5, `current_end` 20), skips `[1,30]` (1 ≤ 20), and accepts `[31,40]` —
four pairs, while the greedy-looking `[1,30]` would have capped the chain at
three.

Why no other chain can reach five: an exchange argument. Line up any optimal
chain against the greedy one; by induction each greedy prefix ends no later
than the matching optimal prefix, so every pair the optimal chain later uses
remains available to the greedy sweep, and the greedy chain is at least as
long at every step. Ties on the right endpoint lose nothing: the extra pairs
fail the strict left-endpoint test on their own.

Sorting does the work; the sweep itself keeps two variables.

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.
