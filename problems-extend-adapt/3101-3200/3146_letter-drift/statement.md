# Letter Drift

## Description

You are given two strings `s` and `t`. Every character appears at most
once in `s`, and `t` is a rearrangement of `s` — the same letters in a
different order.

Each letter contributes the absolute gap between its position in `s`
and its position in `t`, and the drift of the pair is the sum of those
contributions. Return the drift of `s` and `t`.

### Example 1

```text
Input: s = "cat", t = "act"
Output: 2
Explanation:
`c` moves from index 0 to index 1, `a` moves from 1 to 0, and `t` stays
at index 2. The total is |0 - 1| + |1 - 0| + |2 - 2| = 2.
```

### Example 2

```text
Input: s = "abcdef", t = "fabcde"
Output: 10
Explanation:
`f` jumps from the end of `s` to the front of `t` — a gap of 5 — while
every other letter shifts exactly one place, giving 5 + 5x1 = 10.
```

### Example 3

```text
Input: s = "wander", t = "wander"
Output: 0
Explanation:
A rearrangement may leave every letter where it was, and then every gap
is zero.
```

### Constraints

- `1 <= s.length <= 26`
- No letter repeats inside `s`.
- `t` contains exactly the letters of `s`, possibly reordered.
- `s` holds only lowercase English letters.

## Hints

### Hint 1

Each letter occurs at most once per string, so a single 26-slot array
is enough to remember where every letter sits in `s`.

### Hint 2

Walk `t` once; when position `i` holds letter `c`, add the value
`|i - pos[c]|` to a running total.
