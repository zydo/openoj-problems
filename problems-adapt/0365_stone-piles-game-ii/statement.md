# Stone Piles Game II

## Description

Stones lie in `piles` — a row of piles, the `i`-th holding a positive
number `piles[i]` of stones. Alice and Bob play for the most stones, Alice
moving first.

On a turn, the mover takes every stone from the first `X` remaining piles,
for any `X` with `1 <= X <= 2M`, and then the limit grows to
`M = max(M, X)`. The game starts with `M = 1` and ends when the row is
empty.

With both players playing perfectly, return how many stones Alice ends
with.

### Example 1

```text
Input: piles = [3,9,1,2]
Output: 12
Explanation: Alice may take up to two piles immediately, and 3 + 9 = 12
beats every slower start; Bob collects the last two piles.
```

### Example 2

```text
Input: piles = [2,3,4,5,6]
Output: 11
Explanation: Alice opens with just the 2. Bob takes the 3, and Alice then
lifts the limit to M = 2 and sweeps 4 + 5 for 2 + 9 = 11; Bob's last take
is the 6.
```

### Example 3

```text
Input: piles = [1,1,1,1,60]
Output: 3
Explanation: However Alice plays, Bob can arrange to be the one who
reaches the 60. Her best line yields 1 + 1 + 1 = 3 stones.
```

### Constraints

- `1 <= piles.length <= 100`
- `1 <= piles[i] <= 10⁴`

## Hints

### Hint 1

Count from the back: a suffix total tells you how many stones remain in
`piles[i:]`, and the mover plus the opponent will take all of them between
them.

### Hint 2

Let `dp(i, m)` be the best haul available to whoever moves at `piles[i:]`
when the limit is `m`. Taking `x` piles leaves the opponent at
`(i + x, max(m, x))`, so the mover earns the suffix total minus the
opponent's `dp` — maximize that difference over `1 <= x <= 2m`.

### Hint 3

Once `2m` reaches the number of piles left, the mover takes everything;
that bound keeps `m` meaningful and every total inside 32 bits.
