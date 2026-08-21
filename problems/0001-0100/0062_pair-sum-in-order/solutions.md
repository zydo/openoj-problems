# Solutions — Pair Sum In Order

Two searches that both pay with the ordering instead of memory. One visits
the array once, retiring an endpoint at each end with two converging
markers; the other asks each position a single question — is your partner
in the sorted remainder? — and lets bisection answer it. Neither remembers
anything but a few indices.

## Two Pointers

Without extra memory the only leverage left is the ordering, and the ordering
is enough. Put one marker on the first value and another on the last, and ask
what their sum tells you. If it falls short of `target`, then the smallest
value in the range is hopeless: its best remaining partner is exactly the value
under the right marker, and even that partner was too small. Nothing further
inside the range can rescue it, so the left marker steps inward. If instead the
sum overshoots, the same argument retires the largest value — its most modest
available partner is the one under the left marker, and even that overshot.

So every comparison eliminates one endpoint with a proof attached, and the
range narrows by one position per step. Since the promised pair is never the
element being discarded, it survives every round and the markers must meet on
it. On `nums = [-13,-6,5,9,17]` with `target = 3` the markers open on `-13` and
`17`, whose sum of `4` is one too many, so `17` leaves; `-13 + 9 = -4` falls
short and `-13` leaves; `-6 + 9 = 3` lands, and the answer is the pair of
one-based positions `[2, 4]`.

Two integer markers are the entire state, which is what makes the space
constant. The traversal visits each position at most once, since each iteration
moves one marker toward the other and they start `n - 1` apart. Duplicate
values need no special care: in `[4,4,7,7,7]` the markers close until they sit
on the two fours, which are different positions and therefore a legal pair. The
empty return at the bottom is unreachable given the uniqueness promise, and is
there only so the function is total.

**Complexity:** `O(n)` time, `O(1)` space.

## Binary Search

The same guarantee reads differently from one position's point of view. Take a
position `i`; the partner it needs is the exact value `target - nums[i]`, and
that partner — if it exists — must live among the positions after `i`, because
a position cannot pair with itself and reporting the smaller position first
makes `i` the left half of the pair. That remainder `nums[i+1..]` is sorted, so
one bisection either finds the partner or proves it absent. March `i` across
the array and the promised pair must be found: the search stops at the first
position whose complement is present.

Bisection inside a sorted range keeps two bounds, `lo` and `hi`, and halves the
distance between them per comparison; a hit inside `nums[i+1..]` is reported as
the one-based pair `[i + 1, mid + 1]`. Duplicates cost nothing: the range
sought is a value, and `nums[i+1..]` being non-decreasing means any cell
holding that value answers — Example 3's two `4`s are adjacent, so the scan at
`i = 0` finds the second one immediately. The loop bound `i + 1 < n` leaves the
final position unexamined, which is correct because it has no legal partner
left.

The price of the per-position question is logarithmic: each of at most `n`
positions pays one bisection of at most `log n` comparisons, against the
single linear sweep of the two-marker method. What both hold to is the problem's
real demand — the state is a handful of indices, and nothing grows with `n`.

**Complexity:** `O(n log n)` time, `O(1)` space.
