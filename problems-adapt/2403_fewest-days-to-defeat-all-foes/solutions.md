# Solutions — Fewest Days to Defeat All Foes

## Bitmask dynamic programming

Seventeen foes at most, so the reachable situations are the `2^n` subsets of
defeated foes. Let `dp[mask]` be the fewest days needed to reach the situation
where exactly the foes in `mask` are gone. The mask is a complete state because
the daily gain is a function of the defeat count alone (`popcount(mask) + 1`)
and energy always restarts from zero after a kill — nothing else about the
order the set was cleared in changes what the future costs.

Fill forward over masks. From a reachable `mask`, defeating a remaining foe `j`
of strength `power[j]` takes `ceil(power[j] / gain)` days at the current gain —
after `d` days the energy is `d * gain`, and the first `d` reaching the
strength is exactly the ceiling. Relax that into `dp[mask | (1 << j)]`. Walking
masks in increasing numeric order is a valid schedule, since adding a bit makes
a mask strictly larger and no state is extended before it is final; entries
still at the infinity sentinel are skipped.

`dp[0] = 0` seeds the sweep — no defeats, no days — and `dp[(1 << n) - 1]` is
the answer. Ceiling division handles strengths that are not gain multiples,
and Python's integers absorb strengths up to `10⁹` without care.

For `power = [2,7,1]`: clearing in strength order costs
`ceil(1/1) + ceil(2/2) + ceil(7/3) = 1 + 1 + 3 = 5` days, and no other order
beats it.

**Complexity:** `O(2^n * n)` time, `O(2^n)` space.
