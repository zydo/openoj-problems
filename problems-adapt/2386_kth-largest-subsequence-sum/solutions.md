# Solutions — Kth Largest Subsequence Sum

## Heap enumeration of subset sums

Name the ceiling first: `base`, the total of all positive elements, is the
largest sum any subsequence reaches. Every other choice falls short of `base`
by a calculable amount — dropping a positive `x` gives up `x`, and carrying a
negative `x` gives up `|x|`. So subsequence sums correspond one-to-one with
`base` minus subset sums of the absolute values, and the `k`th largest sum is
`base` minus the `k`th smallest of those subset sums (the empty subset's `0`
being the smallest of all). The problem has become an ordered walk through
subset sums of small non-negative numbers.

The walk uses a min-heap of `(sum, idx)` pairs, `idx` marking the largest
position a subset uses, with the absolute values sorted ascending. Seed it
with the single-element subset `{costs[0]}`. Popping `(cur, idx)` delivers the
next smallest subset, which spawns two successors: swap the last chosen element
for its successor (`cur - costs[idx] + costs[idx + 1]`), or keep it and add the
successor too (`cur + costs[idx + 1]`). This two-way split generates each
subset exactly once and in non-decreasing order, so no visited-set is needed.

Since the empty subset already occupies rank 1, the counter starts there and
pops until rank `k` lands; `k == 1` short-circuits to `base`. With `k` capped
at 2000 the heap holds at most about `2k` pairs at any moment.

For `nums = [3,-1,5]` and `k = 5`: `base` is 8, the costs are `[1,3,5]`, and
the five smallest subset sums are `0, 1, 3, 4, 5` — so the answer is
`8 - 5 = 3`.

**Complexity:** `O(n log n + k log k)` time, `O(n + k)` space.
