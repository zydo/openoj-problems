# Solutions — Best Start for a k-Step Walk

## Binary Lifting

Every cell forwards to exactly one fixed destination, so the trajectory from
each start is determined in advance and, over `k` steps, eventually cycles.
With `k` as large as `10¹⁰`, stepping through the moves for every start is
far out of reach — but the step function composes: knowing where `2^j` moves
carry the token also tells you where `2^(j+1)` moves carry it, by doing one
`2^j` jump and then another from wherever it lands.

The code builds two tables for each `j < bit_length(k)`: `up[j][x]`, the cell
holding the token after `2^j` moves starting from `x`, and `sm[j][x]`, the
sum of the indices that _receive_ the token during those moves. Level `0` is
`receiver[x]` in both roles, and each higher level splices two lower jumps:
the landing cell follows `up[j-1]` twice, while the sums add
`sm[j-1][x] + sm[j-1][up[j-1][x]]`, since the second jump's contributions
begin where the first one ended.

Answering a start `x` then decomposes `k` into powers of two: scan the set
bits from lowest to highest, and on each set bit `b` add `sm[b][cur]` to the
running total and teleport `cur = up[b][cur]`. The starting index `x` is
added first — it belongs to the score but to no receiving sum. Each start
costs at most `log k` lookups, and the answer is the best total over all `n`
starts. Self-destinations (`receiver[i] == i`) need no special casing; the
tables simply keep adding `i` on every jump.

**Complexity:** `O(n log k)` time, `O(n log k)` space.
