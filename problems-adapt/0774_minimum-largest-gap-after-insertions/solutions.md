# Solutions — Minimum Largest Gap After Insertions

## Binary search on the answer

Searching over placements is hopeless; searching over answers is easy. Ask, for
a candidate distance `D`, whether `k` extra points suffice to keep every
neighbouring distance at `D` or below. The runs between consecutive given points
are independent — a point dropped inside one run does nothing for any other — so
the cheapest way to satisfy a run of length `g` is to cut it into equal pieces,
which needs `⌈g / D⌉ - 1` points, and the candidate is achievable exactly when
those numbers sum to at most `k`. Loosening `D` never increases any of those
counts, so the achievable candidates form an upper ray and the smallest one can
be pinned down by bisection.

The bracket starts at `0`, which is never achievable, and at the widest existing
run, which always is: it costs nothing, since no run then exceeds the bound. The
code halves this bracket a fixed sixty times, each round running one linear pass
over the runs to add up the required points and moving whichever end the verdict
allows. Sixty halvings shrink the bracket by more than eighteen orders of
magnitude, comfortably inside the `10⁻⁶` the answer is judged to, so the loop
count is a constant rather than a function of the tolerance. The upper end is
returned because the invariant keeps it on the achievable side, and a guard
catches a degenerate non-positive midpoint before it can be used as a divisor.

The result is always strictly positive: the inputs increase strictly, so at least
one run has positive length, and however many points are dropped into it the
pieces stay positive. Runs far wider than the rest simply swallow most of the
budget, which the per-run cost formula accounts for exactly, with no separate
allocation step needed.

**Complexity:** `O(n log(widest run / eps))` time — sixty rounds of an `O(n)`
test — and `O(n)` space for the list of runs.
