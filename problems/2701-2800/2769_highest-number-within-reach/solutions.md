# Solutions — The Highest Number Within Reach

## Close the gap two units at a time

Everything reduces to how fast the gap between the two numbers can close.
Track `gap = x - num`: one move shifts `x` and `num` independently up or
down, so the gap changes by exactly `-2`, `0`, or `+2` each step. Whatever
mix of directions you pick, a single move shrinks the gap by at most 2 —
that is the hard speed limit the answer lives under.

To start `x` as high as possible, spend every move shrinking the gap at
that full rate: decrease `x` by 1 while increasing `num` by 1, closing 2
units per step. After `t` such steps the pair meets exactly when `x`
started `2 * t` above `num`, so the highest value within reach is
`num + 2 * t` — no strategy can beat it, because nothing ever closes more
than 2 units of gap per move. Stopping early only narrows the reachable
set, so "at most `t` moves" still spends all `t`.

The examples agree: with `num = 7, t = 3` the answer is `7 + 6 = 13`, and
with `num = 10, t = 4` it is `10 + 8 = 18`.

**Complexity:** `O(1)` time, `O(1)` space.
