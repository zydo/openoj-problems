# Solutions — Largest XOR of Two OR Halves

## Reachable OR-Sets Around a Boundary

Only the OR of each half enters the score, so the arrangement inside a
half is irrelevant — a half is fully described by its set of values.
There is a second, bigger simplification: walking a pick from left to
right, its left half occupies some prefix `nums[0:i]` and its right half
the corresponding suffix `nums[i:]`, because the first `k` chosen
elements all sit before the last `k`. The search therefore collapses to
picking a boundary `i`, then `k` elements from each side, and the two
sides never interact.

Each side is a small bounded knapsack. Sweeping left to right, `dp[c]`
tracks which OR values can be built from exactly `c` of the elements
seen so far; a fresh element `x` may extend any entry of `dp[c - 1]`,
and iterating `c` downward stops an element from being counted twice.
After each step the contents of `dp[k]` are frozen into `pre[i + 1]`.
The same sweep mirrored from the right yields `suf[i]`. Because every
value is below `2⁷`, no set ever exceeds 128 entries, whatever `n` is.

The answer then falls out directly: for every boundary `i` between `k`
and `n - k`, cross every `a` in `pre[i]` with every `b` in `suf[i]` and
keep the largest `a XOR b`. Halves drawn from disjoint ranges are always
legal, and every legal pick is covered by its own boundary, so the
maximum is exact. Take `nums = [1,2,4,8,3]` with `k = 2`: at the
boundary after the second element the left side offers only `1 OR 2 = 3`,
the right side offers `12`, `7`, and `11`, and `3 XOR 12 = 15` turns out
to be the global best. When `n = 2k` the single boundary may force equal
ORs on both sides, and the answer is `0` — as with `[7,1,1,7]`, whose
halves both OR to `7`.

**Complexity:** with `V ≤ 2⁷` the size of the OR-value universe, the
knapsack sweeps cost `O(n · k · V)` and the pairing loop `O(n · V²)`;
space is `O(n · V)`.
