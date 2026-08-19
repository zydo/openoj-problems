# Solutions — Least Damage Taken Finishing All Enemies

## Sort by damage-to-kill-time ratio

Enemy `i` falls after `t_i = ⌈health_i / power⌉` seconds under your strikes,
and throughout those seconds every survivor — the target included — keeps
hitting you. Fix any elimination order and the bill writes itself: for each
enemy in sequence you absorb the combined damage of everyone not yet dead,
times that enemy's kill time. So only the ordering is a decision.

To compare two adjacent enemies `i` then `j` against the reverse, note that
everything before and after the pair cancels, and what changes is the damage
the later-killed one gets to deal during the earlier one's death throes:
`damage_i · t_j` one way, `damage_j · t_i` the other. Taking `i` first wins
exactly when `damage_i / t_i >= damage_j / t_j`, so descending ratio is the
globally optimal schedule by the usual adjacent-swap induction. The code
sorts on `-damage / t`, then sweeps once: a running `remaining` total of
still-alive damage is charged `remaining · t_i` per enemy and reduced by
`damage_i` as each one dies.

The example `power = 1, damage = [9,3], health = [9,1]` shows why raw damage
is the wrong key: the tough enemy's ratio is `9/9 = 1` against the frail
one's `3/1 = 3`, so the frail one dies first for a bill of `12 + 81 = 93`
rather than `108 + 3`. Equal ratios — the `6/3` and `2/1` pair — leave the
compared terms identical, so ties can break either way. Ceiling division
handles healths that are not multiples of `power`, as in the lone enemy of
example 3, who needs `⌈12/5⌉ = 3` strikes.

**Complexity:** `O(n log n)` time, `O(n)` space.
