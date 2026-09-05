# Count Rotation Sequences

## Description

You are given two strings `s` and `t` of the same length `n`, and an integer
`k`.

One operation on `s`: pick a length `l` with `0 < l < n`, cut off the block of
the last `l` characters, and attach that block in front of the remaining
characters. For instance, from `s = "abcd"` the choice `l = 2` yields
`"cdab"`.

Return the number of distinct sequences of exactly `k` operations that turn
`s` into `t`. Two sequences differ as soon as they choose different lengths at
some step.

The count may be very large, so report it modulo `10^9 + 7`.

### Example 1

```text
Input: s = "world", t = "ldwor", k = 2
Output: 3
Explanation: The three two-step sequences cut lengths (1, 1), (3, 4) and
(4, 3):
- (1, 1): "world" -> "dworl" -> "ldwor"
- (3, 4): "world" -> "rldwo" -> "ldwor"
- (4, 3): "world" -> "orldw" -> "ldwor"
```

### Example 2

```text
Input: s = "xyxyxy", t = "xyxyxy", k = 1000000000000000
Output: 205071942
Explanation: The string has period 2, so three of its six rotations spell t,
and many long sequences end on t. The exact count is astronomical, so the
residue modulo 10^9 + 7 is reported.
```

### Example 3

```text
Input: s = "aabb", t = "abab", k = 4
Output: 0
Explanation: Every operation merely rotates s, so no sequence can ever
produce a string that is not a rotation of the original. "abab" is not a
rotation of "aabb".
```

### Constraints

- `2 <= s.length <= 5 * 10^5`
- `1 <= k <= 10^15`
- `s.length == t.length`
- `s` and `t` contain only lowercase English letters.

## Hints

### Hint 1

An operation never invents or reorders characters beyond sliding a suffix to
the front. What does that say about the set of strings reachable at any step?

### Hint 2

Every reachable string is a rotation of the original. You will need to know
how many of the `n` rotations spell `t` — a linear-time string matcher such as
KMP or the Z algorithm finds all of them in one pass.

### Hint 3

Rotations that spell `t` are interchangeable, and so are the rest. That
collapses the state to two classes, and the step count between them follows a
small recurrence — which `k` up to `10^15` forces you to evaluate by matrix
exponentiation.
