# Solutions — Maximum Slot AND Sum

## Bitmask DP over slot positions

A slot holds at most two numbers, so treat every slot as two single-seat
positions: `2 · slots` positions in all, where position `p` belongs to slot
`p // 2 + 1` — positions 0 and 1 feed slot 1, positions 2 and 3 feed slot 2,
and so on. Since `slots <= 9` there are never more than 18 positions, so the
set of filled positions fits in one 18-bit mask and every assignment can be
reached by plain enumeration over the `2^18` masks.

The score does not care in which order elements were placed, only which
element ended up where. That lets the sweep fix the order: a state's popcount
is exactly how many elements are already seated, so the element placed from
state `mask` is always `nums[popcount(mask)]`. The DP starts at the empty
mask with score 0. For each reachable mask it either reports a terminal
score (all `n` elements seated) or drops the next element into every free
position `p`, relaxing `dp[mask | 1 << p]` with
`dp[mask] + (nums[i] & (p // 2 + 1))`.

Take `nums = [1, 6, 2, 8, 3, 5]` with `slots = 3`: filling positions 0, 2,
3, 4, 5, 6 corresponds to seating 1 and 8 in slot 1, 6 and 2 in slot 2, 3
and 5 in slot 3 — score 1 + 0 + 2 + 2 + 3 + 1 = 9, which the sweep confirms
as the best terminal state. Masks that no placement order can reach keep the
sentinel −1 and are skipped; the answer is the maximum score over terminal
masks.

**Complexity:** `O(2^(2m) · m)` time, `O(2^(2m))` space, where `m = slots <= 9`.
