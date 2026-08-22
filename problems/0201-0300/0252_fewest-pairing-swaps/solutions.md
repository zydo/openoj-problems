# Solutions — Fewest Pairing Swaps

Both solutions read the line the same way — only the slot a number occupies
matters, and the partner of `x` is `x ^ 1` — and both land on the total the
proof certifies: `n` minus the number of groups the partner pairs chain the
slots into. The sweep earns that total constructively: it walks the slots
once, dragging each missing partner home with one counted exchange per
freshly settled slot. The counter goes straight at the group structure
instead — union the two slots each pair straddles, count the components that
survive, and return `n` minus that count without ever performing an exchange.

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

## Union-Find Component Counting

The sweep's optimality proof already names the answer: give each slot a node
and each partner pair a link between the two slots its members occupy, and the
total is `n` minus the number of groups those links form. This variant
computes that count directly — it builds the group structure and never
simulates a swap.

An index table `pos` mapping each value to where it stands does the same duty
as in the sweep. Stepping `v` over the even values visits every partner pair
`(v, v ^ 1)` exactly once, and each pair unions the slot holding `v` with the
slot holding `v ^ 1`; a pair already sharing a slot unions a node with itself
and changes nothing. The union-find carries path compression and union by
size, so each link costs nearly constant time, and a counter that starts at
`n` and drops by one per merging union finishes at the number of groups.
Returning `n` minus that count is the whole computation.

The shape of the groups explains the arithmetic. Every slot holds two numbers,
so every node has degree two, and the links close into disjoint cycles: a
settled slot is a cycle of length one, a straddling pair an ordinary edge.
Settling a slot of a cycle splices its two links into one and leaves a cycle
shorter by one, so `L - 1` exchanges clear a group of `L` slots — and fewer
cannot, by the settled-region argument the sweep section makes. Summing
`L - 1` over the groups leaves `n` minus the group count, exactly what the
counter returns. On `[3,1,4,0,2,5]` all three slots sit on one cycle and it
returns two; on `[5,4,1,0,3,2]` every slot is its own cycle and it returns
zero.

**Complexity:** `O(n α(n))` time, `O(n)` space.
