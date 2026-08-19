# Solutions — Fewest Flips After Rotation

## Sliding window over the doubled string

A rotation moves the front character to the back, so the strings reachable
for free are precisely the `n` cyclic shifts of `s` — handily, the
length-`n` windows of `t = s + s`. For any one shift the two alternating
targets are each other's complements, so their mismatch counts add up to
`n`, and that shift's cost is the smaller of the two.

To obtain every shift's count in constant time, the code first builds
`pre[i]`: how many of the first `i` characters of `t` disagree with the
single absolute pattern `0101…` indexed by global position
(`want = "01"[i & 1]`). The window beginning at `k` then disagrees with
that absolute pattern in `pre[k+n] - pre[k]` places — one subtraction.

The parity correction is the remaining step. Shifting by `k` promotes
global position `k` to the front, and the shift's own target alternation
is aligned to that new front. For even `k` the window's internal parity
matches the absolute pattern, so the mismatches against the
0-starting target equal `abs_mismatch`; for odd `k` every position's
parity is reversed, and the count becomes `n - abs_mismatch`. Either way,
`min(cost_a, n - cost_a)` covers both possible first characters, and the
answer is the minimum over every `k` — Example 2 is the case where this
search pays off, dropping the cost from 3 (no rotation) to 1.

**Complexity:** `O(n)` time, `O(n)` space.
