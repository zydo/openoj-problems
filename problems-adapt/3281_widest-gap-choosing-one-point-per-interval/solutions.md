# Solutions — Widest Gap Choosing One Point Per Interval

## Binary search on the answer with a greedy feasibility check

Achieving tightest distance `x` is monotone: the very picks that manage `x`
also manage anything smaller, so the achievable values form a prefix of
`0..span`, and binary search over that range — with the upper bound set one
past the full coordinate span `max(start) + d - min(start)` so it stays
infeasible — lands on the largest achievable `x` (returned as `lo - 1`).

Testing a candidate is a leftmost-first sweep over the intervals ordered by
left endpoint. Anchor the first pick at `start[0]`; for each later interval
take `max(start[i], last + x)`, the smallest permitted point honoring the
gap, and declare `x` infeasible the moment that value passes `start[i] + d`.
Leftmost placement loses nothing: pushing any pick right only tightens the
room its successors have, so if this sweep fails, no selection honors `x` —
the usual exchange argument.

Ordering by left endpoint also makes the pairwise condition local. Chosen
values come out non-decreasing, so the tightest distance is realized by some
adjacent pair; holding every adjacent gap at least `x` — exactly what the
sweep enforces — is therefore equivalent to every pair being at least `x`
apart.

Degenerate situations fall through the same code: `d = 0` fixes each pick
(and colliding fixed points cap the answer at 0, as with `[0,5,5]` above),
and the two copies of `[10,18]` can do no better than one pick per end, `8`.
Writing `W` for the span plus one, the search costs `O(log W)` sweeps.

**Complexity:** `O(n log n + n log W)` time, `O(n)` space.
