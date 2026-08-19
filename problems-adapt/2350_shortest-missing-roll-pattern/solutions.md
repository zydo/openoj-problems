# Solutions — Shortest Missing Roll Pattern

## Greedy Segments of Complete Face Sets

Start with length 1. Every single-face pattern occurs precisely when each of
the `k` faces has been thrown at least once; let `i1` mark where that first
becomes true. For length 2 the condition continues the story: match a
pattern's first face at its earliest occurrence (no later than `i1`), and the
second face must occur somewhere after that match — which every choice of
second face enjoys exactly when all `k` faces show up again past `i1`. Each
further full stretch of faces extends the same guarantee to patterns one
throw longer, since whatever prefix has been matched, the stretch offers
every possible next face.

The converse is greedy and just as direct: if the log cuts into `c` maximal
full stretches — a stretch closes the instant its `k`-th distinct face
appears — then some pattern of length `c + 1` fails. A greedy matcher can
consume at most one pattern element per stretch, so after `c` stretches it is
stranded without a complete set of faces left, and the very next element it
needs may simply not be there. The answer is therefore the number of full
stretches plus one.

The scan keeps one set of faces seen since the last closure, inserts each
throw, and on reaching size `k` bumps the count and empties the set. The
count starts at 1 to cover the degenerate situation where a face is never
thrown at all — then even a length-1 pattern is missing. `k = 1` (every throw
closes a stretch) and logs that end mid-stretch (the partial stretch counts
for nothing) need no special cases. On `rolls = [2,1,3,1,2,3,3,2]` with
`k = 3`, the stretches are `[2,1,3]` and `[1,2,3]`, two of them, so patterns
of length 3 are the first with a gap.

**Complexity:** `O(n)` time, `O(k)` space.
