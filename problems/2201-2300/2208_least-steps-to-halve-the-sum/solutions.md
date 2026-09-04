# Solutions — Least Steps to Halve the Sum

## Greedy halving driven by a max-heap

Halving an entry `x` removes exactly `x / 2` from the total, so the whole
game is to bank the largest possible removal every step. The current
maximum offers that, and an exchange argument locks the greedy in: take any
schedule that halves something smaller while a larger entry sits there, and
swapping that step for the maximum's halving never shrinks the removal at
any point — so some greedy schedule is among the optimal ones. Python's
`heapq` is a min-heap, hence the negated floats.

The loop tracks the outstanding reduction rather than re-summing: it opens
with `target = total / 2`, subtracts the halved amount each step, and stops
the moment `target` crosses zero. The half goes back into the heap, since
it can still be the next maximum — in `[10, 2]`, the entry 10 becomes 5
and is halved again in the very next step.

Floating point is exact for this computation: halving a binary float only
steps its exponent down, so no error accumulates however many times an
entry is halved. The run length is bounded — the remaining sum stays above
`total / 2` while the loop runs, so the top of the heap is at least
`total / (2n)`, each step removes at least a quarter of that, and `2n`
steps are enough in the worst case. Heapifying costs `O(n)`, and each of
the at-most-`2n` steps pops and pushes at `O(log n)`.

**Complexity:** `O(n log n)` time, `O(n)` space.
