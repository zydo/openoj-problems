# Solutions — Cheapest Array Partition With Index Fees

## Suffix DP With a Telescoped Index Fee

The `k * i` factor looks like it entangles every block with every other, since
a block's charge depends on how many blocks came before it. The entanglement
dissolves under one rewrite: expand the total as `sum over blocks t of
(pref_nums[end_t] + k*t) * w_t`, with `w_t` the block's weight sum. The index
part `k * sum_t t * w_t` telescopes into `k * sum_t (totalWeight -
pref_cost[start_t])`, because each block's weight is counted once for every
block index from its own onward — equivalently, once per cut at or after its
start. So a block beginning at `l` carries a self-contained fee
`k * (pref_cost[n] - pref_cost[l])`, and no block needs to know the future.

What remains is a plain partition DP on suffixes: `dp[i]` is the cheapest
charge for cutting `nums[i:]`, anchored by `dp[n] = 0`. The transition picks
the first block `[i, j]`, paying
`pref_nums[j+1] * (pref_cost[j+1] - pref_cost[i]) + k * (totalWeight - pref_cost[i])`
plus `dp[j + 1]`, and sweeping `i` from `n - 1` down to `0` has every needed
suffix value ready. Both prefix arrays make each candidate cost `O(1)`.

The subtlety worth double-checking is which prefix multiplies the weight: it is
`pref_nums[j+1]`, the sum of values from the array's start through the block's
last element — matching the `nums[0..r]` factor of the charging rule — never
the block's own value sum. The fee, by contrast, uses the weight mass from the
split point to the end of the whole array, which is precisely what lets the
charge stand alone. Trace the third example (`nums = [1,5,2,8]`,
`cost = [2,3,1,4]`, `k = 3`): under the rewritten charge `[1,5,2]` costs
`8 * 6 + 3 * 10 = 78` and `[8]` costs `16 * 4 + 3 * 4 = 76`, totalling 154 —
the same 154 the original formula assigns (66 + 88), because the telescoping
shifts fee between blocks while preserving the sum. One cut later,
`[1,5] | [2,8]` totals 155.

Edge cases: the no-cut partition (single transition with `j = n - 1`) is what
large `k` selects, as in the two-element example; `n = 1` runs the loop once
and returns the trivial block charge; and the `INF` sentinel only guards
states that no suffix ever fails to reach.

**Complexity:** `O(n²)` time, `O(n)` space.
