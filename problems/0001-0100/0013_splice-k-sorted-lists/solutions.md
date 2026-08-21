# Solutions — Splice K Sorted Lists

The cost of this problem is decided by how many times a node gets looked at,
and both solutions pay a `log k` factor once per node rather than a factor of
`k`. They differ in who does the choosing. The tournament merges whole chains
two at a time, halving the field each round, so a node is revisited once per
round it survives. The heap keeps all `k` current heads in one pool and asks,
per output node, "which head is smallest now?" — the chains are never merged
with each other; they are simply drained through the same funnel.

## Pairwise Merging

Absorbing one chain at a time into an accumulator is the trap: the
accumulator is re-traversed on every absorption, so a node near the front can
be visited `k` times. Knocking the chains out in rounds fixes that. Pair the
survivors up, splice each pair with the ordinary two-head merge, and carry
the results into the next round; when the survivor count is odd the odd one
out advances untouched. The field halves each round, so `⌈log₂ k⌉` rounds
finish the job and each of the `N` nodes is touched once per round.

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

## Min Heap

Every chain is already sorted, so at any moment the next node of the output
is the smallest of the `k` current heads — no other node can precede it.
A min-heap answers exactly that question per step, which removes the notion
of rounds and pairwise splicing entirely: the code seeds the heap with each
non-null head, then repeatedly pops the smallest, attaches it to the tail
being built, and pushes that node's successor as its list's new entry. One
list, one entry — the heap never holds more than one node per chain, which
is why it stays at size `k` and never at `N`.

Entries are keyed by `(value, input position)`. The position is doing two
jobs: equal values pop in input order, keeping the output stable with
respect to the array (the same rule the pairwise splice's `<=` enforces),
and — since several ports cannot compare nodes at all — it gives every
entry a total order on its own. A sentinel head absorbs the first
attachment; when the heap empties every chain has run dry, and the last
attached node already ends the output because its successor was taken on
the way in.

Null heads are simply never seeded, so an empty array and an array of
nothing but nulls both leave the heap empty and return the sentinel's null
successor. Each of the `N` nodes is pushed once and popped once, each heap
operation costing `O(log k)`, and the only extra storage is the heap
itself. (The Rust port detaches each node's tail before relinking, so the
remainder of its chain can be handed back to the heap as an owned entry —
the funnel is the same.)

**Complexity:** `O(N log k)` time, `O(k)` space.
