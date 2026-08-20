# Solutions — The Repeated Value

## Floyd's Cycle Detection (Linked-List View)

Regard the array as a function on positions: cell `i` leads to cell `nums[i]`.
There are `n + 1` cells and every value lands in `1..n`, so the walk
`0 -> nums[0] -> nums[nums[0]] -> ...` can never leave the array and must
eventually revisit a cell — it enters a loop. The repeated value is that loop's
entry: if `nums[i] == nums[j] == d` with `i != j`, then cells `i` and `j` both
lead into cell `d`, and a cell with two inbound leads is precisely where a walk
first returns to already-visited ground.

On `[2,5,1,4,2,3]` the walk is `0 -> 2 -> 1 -> 5 -> 3 -> 4 -> 2`: cells 0, 2,
1, 5, 3 form the tail and cells 4, 2 close a two-cell loop whose entry, 2, is
the repeated value.

The two-speed walk finds the entry. Both pointers set out from cell 0 — a start
guaranteed to lie outside the loop, since no value in the array is 0 — and one
advances by one hop (`slow = nums[slow]`) while the other advances by two
(`fast = nums[nums[fast]]`) until they collide somewhere inside the loop. Then
one pointer restarts at 0 and both move one hop at a time; the classical
distance argument says they meet at the entry — with a tail of length `μ` and a
collision point `λ` hops past the entry, `μ ≡ λ (mod loop length)`, so both
need exactly `μ` further hops to land on it. That entry index is returned.

Both restrictions are met with room to spare: no cell is ever written, and the
whole apparatus is two integers. A degenerate array like
`[6,6,6,6,6,6,6]` — every cell leading straight to cell 6 — is just a
one-cell loop behind a tail, and the same argument carries it. The guarantee
that a single value accounts for all repetition is what makes "the loop entry"
well-defined.

**Complexity:** `O(n)` time, `O(1)` space.
