# Pieces With Unique First Letters

## Description

You are given a string `s` of lowercase English letters. Cut it into one or
more contiguous pieces: picking any set of split points tiles `s` from left
to right. Call such a cut unique-started when no letter opens two different
pieces — across the whole cut, every piece's first character must differ
from every other piece's.

Return the largest number of pieces a unique-started cut can have.

### Example 1

```text
Input: s = "banana"
Output: 3
Explanation: A cut of "b" | "a" | "nana" works: the pieces open with 'b',
'a', and 'n', all different, so three pieces fit. A fourth piece cannot
open — whichever letter led it would already have led another piece.
```

### Example 2

```text
Input: s = "mississippi"
Output: 4
Explanation: Cut "m" | "i" | "s" | "sissippi". Four different letters —
'm', 'i', 's', 'p' — open the four pieces, which is exactly the number of
distinct letters the string contains.
```

### Example 3

```text
Input: s = "zzz"
Output: 1
Explanation: Only 'z' is available to open a piece, so at most one piece
can exist and the whole string stays together.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters `'a'` through `'z'`.

## Hints

### Hint 1

A single letter can open at most one piece, so the answer is bounded by how
many distinct letters appear in `s`.

### Hint 2

The bound is attainable: walk the string once and open a fresh piece every
time the current letter has never opened one before. Each letter's first
occurrence then opens its own piece, and later occurrences simply extend
the piece currently being built.
