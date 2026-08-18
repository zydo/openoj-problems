# Solutions — Splice K Sorted Lists

## Pairwise tournament merging

The cost of this problem is decided by how many times a node gets looked at.
Absorbing one chain at a time into an accumulator is the trap: the accumulator
is re-traversed on every absorption, so a node near the front can be visited
`k` times. Knocking the chains out in rounds fixes that. Pair the survivors up,
splice each pair with the ordinary two-head merge, and carry the results into
the next round; when the survivor count is odd the odd one out advances
untouched. The field halves each round, so `⌈log₂ k⌉` rounds finish the job and
each of the `N` nodes is touched once per round.

![Round 1 splices [2,8,9] with [3,5,11] into [2,3,5,8,9,11] while [6,7] advances untouched; round 2 yields [2,3,5,6,7,8,9,11].](figures/solution-tournament-rounds.svg)

Each pairwise splice is the two-chain routine: compare the two current heads,
attach the smaller one to the tail being built, step that chain forward, and
when one side runs out attach the remainder of the other in a single link — it
is already ordered, so nothing more needs deciding. A sentinel node in front
means every attachment is written the same way and the true head is read off
its successor afterwards. No node is ever copied; only `next` pointers move.

Null heads are stripped before any round begins, which is why an empty array
and an array of nothing but nulls both leave zero candidates and return null
immediately. On the worked example above, three chains of eight nodes total
become one in two rounds: the first round produces `[2,3,5,8,9,11]` and passes
`[6,7]` along, and the second interleaves those two.

Space is the array of surviving heads, largest in the first round at about
`k/2` entries; the relinking itself is in place.

**Complexity:** `O(N log k)` time, `O(k)` space.
