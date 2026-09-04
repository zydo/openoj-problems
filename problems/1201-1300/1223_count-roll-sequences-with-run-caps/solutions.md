# Solutions — Count Roll Sequences With Run Caps

## Dynamic programming on (ending face, run length)

A record's legality is decided locally: the next roll is legal exactly when
it does not push the closing run past its face's cap. So a layer of the
counting needs one number per (face, closing-run length) pair — `dp[j][c]`,
the records of the current length that end with face `j` run exactly `c`
times. Caps never exceed 15, so a 6-by-16 table is the entire state.

The first layer seeds `dp[j][1] = 1`: the six one-roll records. Every further
roll advances the table in two moves. Extending a run is a shift — each
`dp[j][c - 1]` lands in `dp[j][c]`, for `c` up to `runCaps[j]` and no
further, which is what keeps an overlong run from ever being represented.
Starting a run of face `j` takes any record ending in a different face:
sum the previous table's rows into per-face totals, sum those into a grand
total, and `grand - totals[j]` becomes the new `dp[j][1]`, reduced modulo
`10^9 + 7` as it is formed.

Reading every right-hand side from the previous table before replacing it is
the ordering that keeps the two moves from feeding each other within one
step. After `n - 1` transitions each legal record sits in exactly one cell —
its final face and closing run length — so the answer is the table's total
sum, reduced once more. Example 2's uniform caps of 3 never bind at `n = 3`,
and the total collapses to the unrestricted `6^3`; Example 3's mixed caps
pare `6^8` down to 1092872.

**Complexity:** `O(n)` time, `O(1)` space.
