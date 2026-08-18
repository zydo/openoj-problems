# Solutions — Smallest Largest Split Sum

## Binary Search on the Answer

Choosing cut positions directly means weighing an enormous number of cuttings
against each other. The productive question runs the other way: fix a cap `C`
and ask whether `k` pieces, each of sum at most `C`, can cover the array. That
verdict is monotone in `C` — loosening the cap never makes the task harder — so
the feasible caps form a range, and the smallest one is precisely the value we
want: the best achievable largest piece sum.

Testing a cap takes one sweep. Fill the current piece until the next element
would push it past `C`, then open a new piece. Stretching a piece to its limit
cannot hurt what follows: any legal partition under `C` places a cut no later
than the greedy does at each overflow, so the greedy uses the fewest pieces of
all. If that fewest still exceeds `k`, the cap fails.

The search spans `[max(nums), sum(nums)]`: a piece containing the largest
element already sums to at least that much, and one piece swallowing everything
is always a legal cutting. With `nums = [6,1,3,9,4,2]` and `k = 2` the probe
sequence runs:

1. Bounds open at `lo = 9`, `hi = 25`.
2. `mid = 17`: pieces `[6,1,3]` and `[9,4,2]` — two pieces, feasible, `hi = 17`.
3. `mid = 13`: pieces `[6,1,3]`, `[9,4]`, `[2]` — three pieces, `lo = 14`.
4. `mid = 15`: two pieces again, `hi = 15`; `mid = 14` needs three, `lo = 15`.
5. `lo == hi == 15` — the cutting `[6,1,3] | [9,4,2]`.

The bounds make the edges automatic. When `k` equals the array's length, the
cap `max(nums)` already passes, since one element per piece obeys it; zero
values never disturb the sweep, because a zero addition cannot overflow a
nonnegative cap; and `k = 1` is covered by the upper bound, where the single
piece is the whole sum.

**Complexity:** `O(n log(sum(nums)))` time, `O(1)` space.
