# Solutions — Sum of Min Times Sum Over All Subarrays

## Monotonic stacks and prefix sums of prefix sums

Adding `min * sum` over all `O(n²)` runs is hopeless at `n = 10⁵`, so charge
each run to its minimum: for every index `i`, gather the runs in which `i` is
the unique minimum, and credit `power[i]` times the sum of their element
sums. Two monotonic stacks delineate the claim — `prev[i]` is the nearest
strictly smaller entry on the left (popping while `>=`) and `nxt[i]` the
nearest smaller-or-equal on the right (popping while `>`). That deliberate
strict/non-strict asymmetry splits ties: when several equal minima sit in one
run, exactly one of them owns it, starts falling in `(prev[i], i]` and ends in
`[i, nxt[i])`, and nothing is double-counted or dropped.

Inside a claim the contribution is `power[i] × Σ sum(l..r)` over the stretch's
`(left × right)` run choices, and writing each `sum(l..r)` as
`prefix[r+1] - prefix[l]` pulls the double sum apart:
`left × (Σ prefix over the end side) - right × (Σ prefix over the start
side)`, with `left = i - prev[i]` and `right = nxt[i] - i`. Range sums of
`prefix` need one more level, so `pre_prefix` — the running total of `prefix` —
turns each side into a subtraction. The folded term
`power[i] × (left × sum_right - right × sum_left)` joins the answer modulo
`10⁹ + 7` per step.

On `[3, 2, 5]`, the middle entry claims the four runs `[3,2]`, `[2]`, `[2,5]`
and `[3,2,5]`, whose element sums add to `5 + 2 + 7 + 10 = 24`, so it
contributes `2 × 24 = 48`; the flanking singletons contribute `9` and `25`,
matching the statement's total of `82`.

Both stacks are linear — each index is pushed and popped at most once — and
the three prefix tables plus the closing sweep are single passes, so a handful
of length-`n` arrays dominate the memory. Python's wide integers keep products
of `10⁹`-scale values exact before the reduction.

**Complexity:** `O(n)` time, `O(n)` space.
