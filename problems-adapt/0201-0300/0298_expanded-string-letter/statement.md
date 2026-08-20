# Expanded String Letter

## Description

A compressed string `s` is expanded by scanning it once from left to right and
maintaining a result that starts out empty:

- a lowercase letter is appended to the result;
- a digit `d` replaces the result with `d` back-to-back copies of itself.

Given `s` and a position `k`, return the letter standing at position `k` of the
finished result, counting from 1. Return it as a one-character string.

### Example 1

```text
Input: s = "ab3c", k = 5
Output: "a"
Explanation: "ab" tripled is "ababab", then 'c' lands on the end for
"abababc". Position 5 holds 'a'.
```

### Example 2

```text
Input: s = "pq3r2", k = 12
Output: "p"
Explanation: The result grows "pq" -> "pqpqpq" -> "pqpqpqr" -> "pqpqpqrpqpqpqr",
fourteen letters long. The twelfth is 'p'.
```

### Example 3

```text
Input: s = "zt7999999999999999", k = 1000000000
Output: "t"
Explanation: The result is "zt" copied 1441237924662543 times — 'z' on every
odd position, 't' on every even one. Position 1000000000 is even.
```

### Constraints

- `2 <= s.length <= 100`
- Every character of `s` is either a lowercase English letter or one of the
  digits `2`–`9`, and the first character is a letter.
- `1 <= k <= 10^9`
- `k` never exceeds the length of the expanded result, and that length stays
  below `2^63`.

## Hints

### Hint 1

Sixteen nines multiply a two-letter result into quadrillions of characters, so
the result cannot be built. Only its length can be tracked, one character of
`s` at a time: a letter adds one, a digit `d` multiplies by `d`.

### Hint 2

Run the scan in reverse once you know those lengths. Undoing a digit `d` means
the result was some prefix written `d` times over, and position `k` inside a
repetition sits at the same place inside a single copy.

### Hint 3

Keep `k` one-based through that reduction: after shrinking to a prefix of
length `L`, the position becomes `(k - 1) mod L + 1`. Undoing a letter is the
stopping test — if `k` equals the current length, that letter is the one you
want; otherwise drop the length by one and keep going.
