# Solutions — Smallest Number Fitting an Up-Down Pattern

## Stack Flushing at the End of Each Fall Run

Read the pattern as a sequence of blocks. A maximal run of `'D'` letters —
cut off by an `'I'` or by the end of the string — owns `k + 1` consecutive
positions whose digits must strictly decrease; the `'I'` cut points are
single-digit blocks. The construction is one scan with a stack: push `1`,
then `2`, then `3`, ... as the scan advances, and whenever the current
letter is `'I'` (or the string is exhausted) pop the entire stack into the
answer. A stack empties largest-first, so each fall run's pool of digits
comes out in descending order — exactly what the `'D'`s demand.

Why the boundaries also work: the last digit flushed from one block is the
smallest digit of that block's pool, and the first digit of the next block
is the largest of the next pool — and pools are consecutive digit ranges,
because pushes never skip — so the digit after a flush is strictly larger
than the digit before it, satisfying the `'I'` that triggered the flush.

And why nothing smaller exists: the blocks must carry pairwise-disjoint
digit sets, increasing from block to block, so the first block is forced to
take the digits `1..(k₁+1)`, the second the next range, and so on; within a
block, descending emission is forced because the block's first position must
hold its largest digit. The scan produces exactly that assignment. On
`pattern = "IIDDI"`: the first two rises flush `1`, then `2`; the run 3, 4,
5 piles up and flushes at the following rise as `5, 4, 3`; the last rise
flushes `6` — giving `125436`.

Two sanity checks fall out of the same argument: an all-rise pattern prints
`123...(n+1)`, and an all-fall pattern prints the reverse. Every digit is
pushed and popped once, so distinctness is automatic, and the length bound
of eight keeps everything within `'1'..'9'`.

**Complexity:** `O(n)` time, `O(n)` space for the stack and the output.
