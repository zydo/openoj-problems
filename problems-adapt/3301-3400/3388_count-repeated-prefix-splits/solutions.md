# Solutions — Count Repeated-Prefix Splits

## Suffix LCP table with bulk counting

A cut is a pair of boundaries, and the pieces are the runs between them. Both
rules compare a piece against the head of the piece to its right, and "X
equals the first `len(X)` entries of Y" holds exactly when the suffixes of
`nums` starting at X's offset and at Y's offset agree over their first
`len(X)` entries. So build `lcp[i][j]` — the length of the longest shared
start of `nums[i:]` and `nums[j:]` — with the recurrence "matching heads
extend `lcp[i+1][j+1]` by one", filled from the bottom-right corner. That
costs `O(n²)` time, and storing `unsigned short` rows holds the table near
`2 · n²` bytes.

The first rule then collapses to arithmetic. Once `lcp[0][i] ≥ i` says the
opening piece repeats at offset `i`, every boundary `j ≥ 2i` also counts — the
middle piece is then at least as long as the opening one, and whatever follows
it is unconstrained — so `n - 2i` cuts enter the total at once, with
`2i ≤ n - 1` keeping the tail piece non-empty. The second rule is checked one
boundary at a time (`lcp[i][j] ≥ j - i`, plus a tail piece at least that
long), and its loop stops at `2i`, so a cut satisfying both rules is never
counted twice.

The table must cover every pair of offsets, not just the ones these two rules
query, because which offsets get queried depends on the enumeration. Once it
is built each query is `O(1)`, so the counting sweep stays inside the same
quadratic budget.

Edge behaviour: nothing shorter than three entries can be cut; runs of equal
values give many offset pairs long shared starts, which the table handles
uniformly; and `j < n` throughout keeps the tail piece non-empty. For
`[3,3,1,3,3]` the bulk branch fires at `i = 1` (`lcp[0][1] = 1`) and adds
`5 - 2 = 3` cuts, the `i = 2` sweep adds nothing, and the `i = 3` sweep finds
`lcp[3][4] = 1 ≥ 1` for one more — 4 in total.

**Complexity:** `O(n²)` time, `O(n²)` space.
