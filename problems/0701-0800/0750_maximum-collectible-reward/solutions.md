# Solutions — Maximum Collectible Reward

## Bitset knapsack over big integers

An entry joins the total only while it strictly exceeds it, and an exchange
argument shows the collected entries are always best taken in increasing
order — when a set of entries chains in some order, chaining it ascending
keeps every prefix sum at least as far below the next entry. Two equal
entries can never both be used (a second x would demand x > total >= x), so
the array is sorted and deduplicated once, leaving a 0/1 knapsack over
distinct values.

Reachable totals live in one Python big integer `dp`, where bit j records
that total j is achievable. The whole knapsack is the single line
`dp |= (dp & ((1 << x) - 1)) << x`: the mask admits only totals strictly
below x — precisely the states from which x may be taken — the shift forms
`j + x`, and the OR folds those states in. Applying each value once preserves
0/1 semantics.

The answer is the highest set bit, `dp.bit_length() - 1`. Totals stay bounded
because taking the largest value x demands a prior total below x, so the
optimum sits under 2·max(rewards) — roughly 10⁵ bits — which big-int
AND/OR/shift operations devour a word at a time. That is what carries
n = 5·10⁴ entries past the time limit where a byte-per-state table would
drown in memory traffic. Example 1's route (3, then 4, then 9) is exactly the
ascending chain the DP explores; starting at 1, as the statement notes, breaks
the chain at the 4.

**Complexity:** `O(n log n + n·V/w)` time (V = the largest reward, w = the
word size), `O(V/w)` space.
