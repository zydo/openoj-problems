# Solutions — Smallest Absent Positive

## Cyclic Sort (Index as Hash)

Two observations turn this into a linear scan. First, an array of `n` entries
can withhold at most `n` distinct positive values, so the answer is somewhere
in `1..n + 1` — it is `n + 1` exactly when all of `1..n` turn up. Second, once
the answer is known to live in that window, the array can be its own lookup
table: reserve slot `v - 1` for the value `v`, and afterwards the presence of
`v` is readable from a single slot rather than from a search.

The first pass installs that arrangement. Standing at index `i`, while the
value there lies in `1..n` and its reserved slot does not already hold it, the
two are swapped; the value that comes back is examined the same way. The
"already holds it" test is what stops repeats from ping-ponging — a second copy
of a value finds its slot taken by the first and gives up. Values outside
`1..n` are left where they are, since they neither answer the question nor
occupy a slot anyone needs. Although the loops are nested, each swap seats at
least one value permanently and no seated value is ever displaced, so at most
`n` swaps happen in total and the pass is linear.

The second pass reads the arrangement off. The first index whose slot does not
hold `i + 1` names the absent value directly, and if no such index exists the
whole window `1..n` was covered and the answer is `n + 1`. For
`nums = [4,1,2,5]` the seating ends with 1, 2 and 4 in slots 0, 1 and 3 while
slot 2 keeps the 5 that has nowhere to go; slot 2 is therefore the first broken
claim and the answer is 3.

One detail of this port: it seats the values in a copy of the input rather than
in the caller's list, which is why the space line below reads `O(n)` even
though the technique itself asks for no auxiliary storage. Apart from that
copy, only a couple of index variables are used.

**Complexity:** `O(n)` time, `O(n)` space.
