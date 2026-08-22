# Solutions — Smallest Absent Positive

Both methods rest on the same pin: with `n` slots to fill, the answer is
confined to `1..n + 1`, so the array can act as its own lookup table, slot `i`
standing for the claim that the value `i + 1` is present. Sign marking leaves
every value where it lies and lends each slot's sign out as the flag for that
claim, one flip per value seen. Cyclic sort does without flags: it permutes the
values until each in-range one occupies the slot that claims it, and lets the
arrangement itself be the table.

## Sign Marking at Value-Index

Here the window observation becomes an encoding problem: whether a value was
seen is one bit of information, and every slot carries a sign it can spare.
Slot `v - 1` keeps its magnitude for the final read-off but contributes its
sign to the claim that value `v` is present; negative means seen.

Before the signs can be trusted they must be made unambiguous, since a
negative slot has to mean "marked" and never "the input happened to be
negative". A first pass therefore replaces every non-positive with `n + 1`:
positive, so it can never be mistaken for a mark, and outside the window, so
it never places one.

The second pass reads `v = abs(nums[i])`; the absolute value is
load-bearing, because marks laid down earlier in the same pass may already
have flipped the entry being read. Whenever `v` lies in `1..n` the pass
negates `nums[v - 1]`, and its `> 0` guard makes repeats harmless: a second
copy of `v` finds the flag already set and flips nothing, so a mark can never
be erased by being claimed twice.

The final pass reports the first slot whose sign survived positive; that
slot's index names the absent value, and if every slot comes back marked the
whole window was covered and the answer is `n + 1`. For `nums = [4,1,2,5]`
the values 4, 1 and 2 flip slots 3, 0 and 1 while the 5, living outside the
window, flips nothing; slot 2 keeps its positive 2 because no 3 ever appears
to claim it, and the answer is 3. The three sweeps are plainly linear: no
nesting anywhere, and every slot is read and written a constant number of
times.

One detail of the port: the Python file marks signs in a copy of the input
rather than in the caller's list, which is why the space line below reads
`O(n)` even though the technique itself asks for no auxiliary storage. The
other languages flip signs in place, and apart from that copy only a couple
of index variables are used.

**Complexity:** `O(n)` time, `O(n)` space.

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
