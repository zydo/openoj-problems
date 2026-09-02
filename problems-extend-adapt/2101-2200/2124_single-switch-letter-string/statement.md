# Single-Switch Letter String

## Description

A string `s` is built from just two letters, `'a'` and `'b'`. It follows
the single-switch pattern when it reads as one block of `'a'`s followed by
one block of `'b'`s — that is, each `'a'` stands somewhere before each
`'b'`. Either block may be empty, so strings of only `'a'`s or only `'b'`s
still qualify.

Decide whether `s` has this shape.

### Example 1

```text
Input: s = "aabb"
Output: true
Explanation: The two 'a's occupy indices 0 and 1 and both 'b's come after
them, so the string never switches back.
```

### Example 2

```text
Input: s = "bba"
Output: false
Explanation: The 'b' at index 1 sits before the 'a' at index 2, which the
pattern forbids.
```

### Example 3

```text
Input: s = "a"
Output: true
Explanation: One letter forms a single block, so the pattern holds
trivially.
```

### Example 4

```text
Input: s = "abba"
Output: false
Explanation: After the string switches to 'b', the 'a' at index 2 arrives
too late to belong to the 'a' block.
```

### Constraints

- `1 <= s.length <= 100`
- Each character of `s` is `'a'` or `'b'`.

## Hints

### Hint 1

Invert the question: the pattern fails precisely when some `'b'` shows up
before a later `'a'`, so one left-to-right pass remembering "have I seen a
`'b'` yet?" is enough.

### Hint 2

Equivalently, a valid string never contains `"ba"` in consecutive
positions.
