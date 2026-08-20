# Solutions — Fewest Adjacent Swaps to Gather K Ones

## Sliding Window of Ones with Median Gathering

The zeros are scenery; write down only the positions of the ones, as
`pos`. A cheapest gathering picks `k` ones that are neighbors in `pos`
and pulls them onto their median — the point minimizing total travel,
since crossing `r` zeros costs `r` swaps. Skipping past an unchosen one
to reach a farther one can only add distance, so windows of `k`
consecutive entries of `pos` cover every candidate group. A coordinate
compression makes the arithmetic clean: with `q[i] = pos[i] - i`, the
`i`-th one is shifted left past every one before it, and in `q`-space a
one pays exactly one swap per position it moves.

For a window starting at entry `i`, the median sits at `mid = i + k //
2`. Pulling the left side onto the median costs `q[mid] * (mid - i) -
(pref[mid] - pref[i])`, and the right side symmetrically costs
`(pref[i + k] - pref[mid + 1]) - q[mid] * (i + k - 1 - mid)`, where
`pref` prefixes `q`. This is the L1-distance-to-median identity, and the
median minimizes it. Sliding `i` across `0..m-k` and keeping the
cheapest window gives the answer, each window priced in constant time.

Take `nums = [1,0,0,0,1,0,0,1]` with `k = 3`: `pos = [0, 4, 7]` and
`q = [0, 3, 5]`. The single window's median is `q[1] = 3`; the left one
pays `3`, the right one pays `5 - 3 = 2`, five moves in total — the two
outer ones slide onto the middle one's neighborhood. `k <= 1` needs no
moves at all, and the early return handles it.

**Complexity:** `O(n)` time, `O(n)` space.
