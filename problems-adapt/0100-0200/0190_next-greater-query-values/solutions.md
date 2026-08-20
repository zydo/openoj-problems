# Solutions — Next Greater, Query Values

## Monotonic Stack with a Hash Map

Each queried value is really a question about `nums`, so one left-to-right
sweep of `nums` can settle the entire query list. The sweep carries a stack
of values that have not yet met a greater one; whenever the arriving value
exceeds the stack top, it is — by the stack's own discipline — the *first*
greater value to the right of everything it pops, since any closer, larger
value would have popped those entries earlier. Each popped value writes
`next_greater[value] = current` into a map, and the arriving value then takes
its turn waiting on the stack.

The stack stays ordered from largest (bottom) to smallest (top): an arriving
value clears away every smaller resident and settles beneath only larger
ones. That invariant is why every entry of `nums` is stacked once and removed
at most once, keeping the sweep linear even with its inner popping loop.
Entries still resident when the sweep ends face nothing greater to their
right and take `-1`.

The map then reduces each query to a lookup. The guarantees carry the
correctness: values never repeat in `nums`, so keying the map by value is
unambiguous, and every queried value occurs in `nums`, so no lookup misses.
On the first example the sweep of `[3, 7, 6, 9, 2]` records `3 → 7`,
`6 → 9`, and `9 → -1` (never popped, so defaulted), which answers the three
queries `[9, 7, -1]` without touching `nums` again. With `q` and `n` the two
lengths, the stack and map are bounded by `n` and the output by `q` — the
linear-time goal met.

**Complexity:** `O(q + n)` time, `O(n)` space.
