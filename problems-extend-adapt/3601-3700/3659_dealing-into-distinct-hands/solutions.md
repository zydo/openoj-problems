# Solutions — Dealing Into Distinct Hands

## Frequency ceiling

Two arithmetic facts decide the answer. First, hands all hold exactly `k`
elements, so `n` must be divisible by `k` — if the division leaves a
remainder, some hand would come up short, and the answer is `false` before
anything else needs checking. Second, let `m = n / k` be the number of
hands. A value never shares a hand with itself, so every occurrence of a
value consumes a different hand; if any value occurs more than `m` times,
there are not enough hands to absorb its copies and the answer is `false`.

Those two conditions are also sufficient. Line up all elements grouped by
value — each distinct value forms one contiguous run of at most `m` copies —
and deal them into the `m` hands round-robin, one element per hand in
turn. Consecutive positions cycle through all `m` hands, so a run of length
at most `m` lands in `m` distinct hands: no hand ever receives the same
value twice. And because the total is exactly `m · k`, every hand ends up
with exactly `k` elements. The deal witnesses that any frequency profile
respecting the ceiling can be realized.

So the algorithm is a single counting pass over `nums`, then two constant-
time checks: `n % k == 0` and the maximum frequency at most `n / k`. No
hand ever has to be materialized.

**Complexity:** `O(n)` time, `O(n)` space.
