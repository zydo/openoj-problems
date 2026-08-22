# Solutions — Largest Subarray Sum

Two routes to the largest block sum: a divide-and-conquer recursion that
merges range statistics over halves, and a greedy left-to-right scan that
keeps the best sum ending at each position. Both produce the same number;
they differ in how the global answer is assembled out of local facts.

## divide_and_conquer

Cut the array in half, solve both halves recursively, and glue. The glue needs
more than each half's best block: it needs four numbers per range — the `total`
sum, the best `prefix` (a block touching the left edge), the best `suffix` (one
touching the right edge), and the best block `best` anywhere inside. A
one-element range is `(x, x, x, x)`, and two neighbouring ranges combine in
constant time:

- `total = left.total + right.total`
- `prefix = max(left.prefix, left.total + right.prefix)`
- `suffix = max(right.suffix, right.total + left.suffix)`
- `best = max(left.best, right.best, left.suffix + right.prefix)`

Only the last line is genuinely new. A winning block either lies inside one
half — already answered by the recursion — or straddles the cut, in which case
it is some suffix of the left half joined to some prefix of the right, and the
best such join is `left.suffix + right.prefix`. Bottoming out at single
elements means all-negative inputs need no seeding trick; no comparison ever
sees an implicit `0`.

Each level merges in `O(n)` across `O(log n)` levels, and the stack is only as
deep as the halving — around 17 frames at `n = 10^5`, safe in every language
here.

**Complexity:** `O(n log n)` time, `O(log n)` space for the recursion stack.

## kadane

Turn the global question into a local one. For each position ask: what is the
largest sum of a block ending exactly here? Call it `current`. Every block ends
somewhere, so the answer is simply the largest `current` over all positions.
And `current` obeys a one-step rule — the best block ending at `i` either grew
out of the best block ending at `i - 1`, extended by `nums[i]`, or begins at
`i` with nothing behind it. A single forward scan can maintain exactly that.

The code seeds both `best` and `current` with `nums[0]` rather than `0`, which
is what makes all-negative inputs come out right: for `[-3, -1, -2]` the answer
is `-1`, and an implicit empty prefix worth `0` would beat it. From then on, if
`current` has fallen below zero it can only subtract from whatever follows, so
the code abandons it and restarts at `value`; otherwise it extends to
`current + value`. Either way `best` rises whenever the new running sum beats
it.

![The running best-sum-ending-here for [-3,5,-6,4,-1,3,-2,1,-4] restarts at 5 and at 4, and peaks at 6 over the block [4,-1,3].](figures/solution-kadane-walk.svg)

Abandoning a negative prefix is the greed that makes this correct: a negative
`current` contributes strictly less to the future than starting fresh does, so
no optimal block reaching past this point can contain it. Both variables are
plain scalars carried through one pass.

Because each extend-or-restart decision needs only the running sum and the
current entry, one scan suffices — no window, prefix array, or recursion.

**Complexity:** `O(n)` time, `O(1)` space.
