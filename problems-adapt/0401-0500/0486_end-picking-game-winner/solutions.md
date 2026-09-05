# Solutions — End-Picking Game Winner

## Interval DP on the Score Difference

Carrying two separate score totals is wasted effort; only their gap ever
matters. Let `diff(i, j)` be the largest value of _mover's final score minus
opponent's final score_ attainable on the stretch `nums[i..j]`. The mover
lifts one of the two ends, credits it, and then stands on the receiving end
of whatever gap the opponent earns on the remainder, so
`diff(i, j) = max(nums[i] - diff(i + 1, j), nums[j] - diff(i, j - 1))`.
The first mover, facing the full array, wins precisely when
`diff(0, n - 1) >= 0` — ties belong to the first player.

The implementation flattens the table into one array: seeded with `nums`, the
cell `dp[i]` carries the answer for the length-1 stretch that ends at the
current `j`. Stretches are consumed by growing length, and just before the
write for `(i, j)` the array still holds `dp[i]` = stretch `(i, j - 1)` and
`dp[i + 1]` = stretch `(i + 1, j)` — the two shorter stretches the recurrence
reads. Since `i` sweeps left to right, `dp[i + 1]` is consumed before the
current length overwrites it, so `dp[i] = max(nums[i] - dp[i + 1], nums[j] - dp[i])`
needs no second buffer.

Optimal play on both sides falls out of the construction: the `max` gives the
mover the more profitable end, and subtracting the inner diff bills the
opponent's strongest reply to that choice. Initialization covers the base
cases — a lone entry is taken for a gap equal to itself — so even `nums = [5, 5]`
needs no special code: taking either 5 leaves the other, `diff` over the pair
is `max(5 - 5, 5 - 5) = 0`, and the tie rule returns true. On
`[6, 12, 4, 10]`, the sweep finds `diff = 12` for the full array — the 10
first, the 12 later — confirming the first player's win.

**Complexity:** `O(n²)` time, `O(n)` space.
