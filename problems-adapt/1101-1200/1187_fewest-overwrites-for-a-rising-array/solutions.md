# Solutions — Fewest Overwrites for a Rising Array

## Dynamic programming on the last value

What matters after processing a prefix of `values` is only which value the
prefix can end on, and what the cheapest way of ending there cost. That pair —
"prefix is strictly increasing and its last value is `v`, reached with `c`
moves" — is the whole DP state, carried in a dictionary from last value to
minimum cost. Sorting and deduplicating `pool` first lets each overwrite
candidate be located by binary search rather than a scan.

The dictionary is seeded before the first transition: leaving `values[0]`
alone costs 0, while replacing it with any pool entry below `values[0]` costs
1 — entries above it are dominated by keeping the original and are pruned.
At each later position every state `(last, ops)` forks two ways: keep
`values[i]` when it strictly exceeds `last`, at no cost, or overwrite it with
the smallest pool entry strictly greater than `last` (found with
`bisect_right`) for one extra move. Taking the _smallest_ fitting entry is
always safe because it constrains the positions still to come the least.

Example 2 shows why both forks must survive: with `values = [5,9,7,8]` and
`pool = [11,12]`, the state ending on 9 cannot be repaired by one overwrite
(nothing fits between 5 and 7), so the optimum overwrites the two later
elements instead — a path the keep-fork had already priced at two moves.

If a round leaves the dictionary empty, no arrangement exists and `-1` comes
back immediately, as with `[7,6,5]` and pool `[8]`. Otherwise the answer is
the cheapest cost among the surviving states. With `n` the length of `values`
and `m` the number of distinct pool entries, the dictionary never holds more
than `m + 1` states, one per achievable last value.

**Complexity:** `O(n · m log m)` time, `O(m)` space.
