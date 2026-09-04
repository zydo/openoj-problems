# Cross-Swaps to Equalize Two Strings

## Description

Two strings `s1` and `s2` have the same length and contain only the letters
`"x"` and `"y"`. One move picks any character from `s1` and any character
from `s2` and exchanges them — the two characters may sit at the same index
or at different indexes, but they must come from different strings.

Return the fewest moves after which the two strings are identical, or `-1`
if no sequence of moves can make them equal.

### Example 1

```text
Input: s1 = "yxy", s2 = "yxy"
Output: 0
Explanation: The strings already match, so no move is needed.
```

### Example 2

```text
Input: s1 = "xyxy", s2 = "yxyx"
Output: 2
Explanation: The two x-over-y positions are fixed by one swap, and the two
y-over-x positions by another.
```

### Example 3

```text
Input: s1 = "xxyx", s2 = "yyxy"
Output: 3
Explanation: Pairing the matching-shaped mismatches costs one swap each,
and the two leftovers of opposite shape need two more swaps.
```

### Example 4

```text
Input: s1 = "xxy", s2 = "yyx"
Output: -1
Explanation: Three positions mismatch. Every move repairs mismatched
positions two at a time, so an odd count can never reach zero.
```

### Constraints

- `1 <= s1.length == s2.length <= 1000`
- `s1` and `s2` consist only of `'x'` and `'y'`.

## Hints

### Hint 1

Positions where the strings already agree can be ignored completely. Every
mismatch has one of only two shapes: `x` over `y`, or `y` over `x`.

### Hint 2

A single move touches one character from each string, so it can repair at
most two mismatches — that makes an odd mismatch total hopeless.

### Hint 3

Two mismatches of the same shape cost one move; one of each shape left at
the end costs two. Counting the shapes settles the whole answer.
