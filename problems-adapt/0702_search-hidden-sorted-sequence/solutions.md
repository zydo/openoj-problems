# Solutions — Search a Hidden Sorted Sequence

## Exponential bound, then binary search

A binary search is fenced by two ends, and the reader gives you only the left
one for free: index `0` exists, but where the sequence stops is secret. The
sentinel is what makes the missing fence findable — past the end, `get(i)`
returns `2147483647`, which exceeds every real element, so the predicate
"`get(i)` is below `target`" flips from true to false exactly once as `i`
grows, whether or not the flip happens at the boundary.

Probe exponentially: read `get(1)`, `get(2)`, `get(4)`, `get(8)`, … and stop at
the first `hi` with `get(hi) >= target`. That answer is either a real element
at least as large as the target, or the sentinel itself; in both cases strict
increase guarantees the target can only live at or before `hi`. Because `hi`
doubles each step, this phase costs the logarithm of the final bound — at most
fourteen calls even for the 10⁴-element maximum.

The second phase is the textbook bisection inside `[0, hi]`: locate the
first index reaching at least `target`. If that value equals `target`, the
index is the answer; a larger value — or the sentinel — means the target falls
in a gap between neighbours, and the answer is `-1`. Both phases spend only
`get` calls, so a whole run costs about `2 · log n`, a rounding error against
the 10 000-call budget — and it is the only strategy that stays logarithmic
when `n` itself is the secret.

**Complexity:** `O(log n)` time, `O(1)` space.
