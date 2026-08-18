# Solutions — Fewest Pairing Swaps

## Sweep the slots, dragging each partner home

Only the slot a number occupies matters, and partnership is one bit of
arithmetic: the partner of `x` is `x ^ 1`, since partners agree on every bit
except the lowest. Build an index table `pos` mapping each value to where it
currently stands, so the partner of anything can be found in constant time.

Now sweep the slots from left to right. At slot `(i, i + 1)` take `first =
arr[i]`. If `arr[i + 1]` already equals `first ^ 1` the slot is settled and
nothing happens. Otherwise look up `j = pos[first ^ 1]`, exchange the value at
`j` with the value at `i + 1`, repair both entries of `pos`, and add one to the
count. The exchange lands in some slot strictly to the right of `i`, so slots
already settled are never disturbed and the sweep never revisits one.

The count this reaches is optimal. Give each slot a node and each partner pair a
link between the two slots its members occupy; a pair sharing a slot contributes
a self-loop. Every node has degree two, so the picture splits into groups, and a
group spanning `L` slots needs at least `L - 1` exchanges — each exchange can
merge at most one slot into the settled region. Summing over groups gives `n`
minus the number of groups as a lower bound, and each move the sweep makes
settles a fresh slot and shortens some group by one, so it meets that bound. On
`[5,4,1,0,3,2]` every group is a single self-looped slot and the sweep spends
nothing; on `[3,1,4,0,2,5]` all three slots hang together in one group and it
spends two.

**Complexity:** `O(n)` time, `O(n)` extra space for the index table.
