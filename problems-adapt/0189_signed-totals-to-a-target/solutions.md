# Solutions — Signed Totals To A Target

## Counting DP over Reachable Sums

Rather than walking all `2^n` placements, the method carries forward only the
reachable running totals together with the number of placements producing
each. The map opens at `{0: 1}` — a single way to stand at total zero before
any entry — and each value `value` splits every entry of the map: a total `t`
held with multiplicity `c` sends `c` to `t + value` and `c` to `t - value`.
Once the last entry is folded in, the map lookup at `target` is the answer.

This is the subset-sum table in sparse form, and it bounds itself: after `i`
entries the keys are the distinct signed totals, all lying within `2 * S`
where `S` is the sum of all entries (at most 1000 here). Each step feels like
it doubles the map, but totals collide and their multiplicities pool, so the
cost per entry tracks the count of distinct totals rather than `2^i`.

The first example, `nums = [2,2,2,2]`, `target = 0`, grows the map:

1. `{0: 1}` — standing at zero before any entry.
2. After one 2: `{2: 1, -2: 1}`.
3. After two: `{4: 1, 0: 2, -4: 1}` — the two inner branches land together on 0.
4. After three: `{6: 1, 2: 3, -2: 3, -6: 1}`.
5. After four: `{8: 1, 4: 4, 0: 6, -4: 4, -8: 1}` — and `0` carries the six
   ways to pick which two entries take the minus sign.

Zeros work without special handling even though they double every count:
`+0` and `-0` reach the same total by two different placements, and the
problem counts placements, so the doubling is the correct answer, as the
second example shows (`[3, 0, 3]`, `target = 6` → `2`). The same pooling
makes unreachable targets fall out as the map lookup's default 0, and a
single-entry array is just one splitting step.

**Complexity:** `O(n·S)` time, `O(S)` space.
