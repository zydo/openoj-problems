# The Longest String With No Three In A Row

## Description

You are handed three counts `x`, `y`, and `z` describing a small stock of
letter blocks: `x` copies of the two-letter block `AA`, `y` copies of `BB`,
and `z` copies of `AB`.

Assemble a string by picking any subset of these blocks — all of them, some
of them, or none at all — and laying the chosen blocks end to end in
whatever order you like. The assembled string may never contain three equal
letters consecutively; in other words, `AAA` and `BBB` must not appear in
it.

Return the length of the longest string that can be assembled under this
rule.

A substring is a contiguous non-empty sequence of characters within a
string.

### Example 1

```text
Input: x = 4, y = 1, z = 3
Output: 12
Explanation: Lay the three AB blocks first and follow them with AA, BB, AA,
giving "ABABABAABBAA". No three equal letters ever sit side by side, the
string is 12 characters long, and no arrangement of the available blocks
can do better.
```

### Example 2

```text
Input: x = 2, y = 2, z = 1
Output: 10
Explanation: Prepend the single AB block to the chain AA, BB, AA, BB,
giving "ABAABBAABB". It reads 10 characters and stays free of triples, and
no selection of the blocks produces a longer legal string.
```

### Example 3

```text
Input: x = 1, y = 1, z = 5
Output: 14
Explanation: Chain AA and BB once each and prepend the five AB blocks,
giving "ABABABABABAABB". The string is 14 characters long with no three
equal letters in a row, and that is the best any selection achieves.
```

### Constraints

- `1 <= x, y, z <= 50`

## Hints

### Hint 1

An optimal assembly can afford to use every AB block. A candidate string
that opens with `A` can take all of its unused AB blocks at the very front,
and one led by `BB` can slot them in between those two `B`s — neither move
ever creates a triple.

### Hint 2

Setting the AB blocks aside, what is left is assembled purely from `AA` and
`BB`, and staying triple-free forces those double blocks to alternate:
`AABBAABB…` or the mirror image. So at most `min(x, y)` full pairs fit,
plus one extra block on whichever side is more plentiful.

### Hint 3

Every AB block in play contributes exactly `2` characters, so the answer is
the alternating-doubles total plus `2 * z`.
