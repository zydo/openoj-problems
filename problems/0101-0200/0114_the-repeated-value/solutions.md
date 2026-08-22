# Solutions — The Repeated Value

Both approaches keep the statement's two promises — the array is only ever
read, and the working storage is a couple of integers. The bisection leaves
the array's layout alone and interrogates the value domain: with `n + 1`
entries squeezed into `n` values, the count of entries at or below a
threshold `x` exceeds `x` exactly when the repeat sits at or below `x`, and
each halving of the range costs one full counting scan. Floyd's cycle
detection makes the array carry the information instead — read as a linked
list where cell `i` leads to cell `nums[i]`, the repeat is the loop's entry,
and a two-speed pointer walk lands on it in a single linear chase.

## Value Bisection

The search space is the range `1..n`, not the array. Define `count(x)` as the
number of entries whose value is at most `x`. Were every value `<= x` to occur
at most once, `count(x)` could not exceed `x` — only `x` distinct values are
available below the threshold — so `count(x) > x` certifies that the repeat
lies at or below `x`. The converse holds too: once the repeat `d` is `<= x`,
every entry above `x` comes from a value occurring at most once (the one
repeat is already below the threshold), so those entries number at most
`n - x`, forcing `count(x) >= n + 1 - (n - x) = x + 1`. The predicate is
therefore exact — `count(x) > x` if and only if `d <= x` — and monotone in
`x`, precisely the shape binary search needs.

The bisection maintains `lo <= d <= hi`, opening at `1` and `n` (where
`count(n) = n + 1` makes the predicate true outright). Each step takes
`mid = (lo + hi) / 2`, counts the entries at or below it in one pass, and
retires the half the count acquits: an excess sends `hi` down to `mid`, a
shortfall pushes `lo` past it. After about `log2 n` halvings the bounds meet,
and the value they meet on is the repeat.

On `[2,5,1,4,2,3]` with `n = 5`: `count(3) = 4 > 3`, so `hi = 3`;
`count(2) = 3 > 2`, so `hi = 2`; `count(1) = 1`, so `lo = 2`; the bounds have
met on 2, the repeated value.

Neither restriction is strained. The scan only compares and counts — nothing
is written, ever — and the storage is two bounds plus a running counter, none
of which grows with `n`. The price of refusing the pointer chase is the extra
log factor: every halving re-reads the whole array.

**Complexity:** `O(n log n)` time, `O(1)` space.

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
