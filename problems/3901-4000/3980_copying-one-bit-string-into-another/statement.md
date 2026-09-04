# Copying One Bit String Into Another

## Description

You hold a working bit string `s1` and a goal bit string `s2`, both of length
`n`. Your job is to rewrite `s1` until it matches `s2` exactly, using two
kinds of moves:

- Raise: pick any position of `s1` that holds `'0'` and turn it into `'1'`.
- Wipe: pick two neighboring positions of `s1` that both hold `'1'` and turn
  both of them into `'0'`.

Moves may be applied any number of times, in any order. Return the smallest
number of moves that finishes the rewrite, or `-1` if no sequence of moves can
ever make `s1` equal to `s2`.

### Example 1

```text
Input: s1 = "1010", s2 = "0101"

Output: 6

Explanation:

Positions 0 and 2 hold '1' but must end as '0', so each needs a wipe — and a
wipe always drags a neighboring '1' down with it, which then has to be raised
again. Raising position 1, wiping (1, 2), raising position 1, wiping (0, 1),
raising position 1, raising position 3 turns "1010" into "0101" in 6 moves,
and fewer is impossible.
```

### Example 2

```text
Input: s1 = "0110", s2 = "1001"

Output: 3

Explanation:

The two positions that must drop from '1' to '0' sit next to each other, so a
single wipe clears them both: raise position 0, wipe the pair (1, 2), then
raise position 3. That is 3 moves.
```

### Example 3

```text
Input: s1 = "1001", s2 = "0110"

Output: 6

Explanation:

Now the two positions needing a wipe are at opposite ends of the string, so no
wipe can serve them both: raise position 1, wipe (0, 1), raise position 2,
wipe (2, 3), then raise positions 1 and 2 — 6 moves in total.
```

### Example 4

```text
Input: s1 = "1", s2 = "0"

Output: -1

Explanation:

A wipe needs two adjacent '1' characters, and a one-character string can never
provide them. The lone '1' is stuck forever.
```

### Constraints

- `1 <= n == s1.length == s2.length <= 10^5`
- `s1` and `s2` are made up solely of the characters `'0'` and `'1'`.

## Hints

### Hint 1

A raise is the only move that can turn a `'0'` into a `'1'`, so every position
that must gain a `'1'` costs at least one move by itself.

### Hint 2

A wipe is the only move that can turn a `'1'` into a `'0'`, and it always
clears two neighboring positions at once — its partner must hold a `'1'` at
that moment, which may mean raising it just to knock it back down.

### Hint 3

Walk the string from left to right. While standing at position `i`, remember
whether the previous position already set up a wipe that reaches into `i`.

### Hint 4

Each position that must go from `'1'` to `'0'` is served by one wipe, either
sharing its neighbor's wipe or claiming its own — and the partner forced down
by each wipe accounts for two extra raises.

### Hint 5

A string of length 1 deserves its own branch, because no wipe can ever be
performed there.
